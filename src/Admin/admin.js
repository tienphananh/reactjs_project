import { useEffect, useState } from "react";
import * as carFunction from "../service/carFunction"
import { Link } from "react-router-dom";

function ListCar() {
    const [cars, setCars] = useState([]);
    useEffect(()=> {
        const getAll = async () => {
            const result = await carFunction.getAllCar();
            setCars(result);
        }
        getAll();
    }, []);

    const deleteCar = async(id) => {
        const stds = await carFunction.deleteCar(id);
        setCars(stds);
    }

    return (
        <>
            <button><Link to={"/student/form"}>Add new car</Link></button>
            <table style={{width:700}} border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(item => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <th>{item.price}</th>
                            <th>{item.description}</th>
                            <th>
                                <Link to={"/student/form/"+item.id}>Edit</Link> 
                                || 
                                <button onClick={() => deleteCar(item.id)}>Delete</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ListCar;