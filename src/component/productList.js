import './productList.css'
import { useEffect, useState } from "react";
import * as carFunction from "../service/carFunction"

function ProductList () {
    const [cars, setCars] = useState([]);
    useEffect(()=> {
        const getAll = async () => {
            const result = await carFunction.getAllCar();
            setCars(result);
        }
        getAll();
    }, []);
    return (
        <div class="body-shop">
            {
                cars.map(item => {
                    <div class="shop-1">
                        <div class="shop-img"><a href="http://127.0.0.1:5500/product/product1.html"><img src={item.image} alt=""/></a></div>
                        <div class="shop-des">
                            <a href="http://127.0.0.1:5500/product/product1.html"><p>{item.name}</p></a>
                            <a href="http://127.0.0.1:5500/product/product1.html"><p>{item.company}</p></a>
                            <a href="http://127.0.0.1:5500/product/product1.html"><p>{item.description}</p></a>
                            <div class="price-tag">
                                <a href="http://127.0.0.1:5500/product/product1.html"><p>{item.pricr} <sup>đ</sup></p></a>
                            </div>

                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default ProductList