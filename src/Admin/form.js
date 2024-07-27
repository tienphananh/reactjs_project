import { useEffect, useState } from "react";
import * as carFunction from "../service/carFunction"
import { useNavigate, useParams } from "react-router-dom";

function FormCar() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    const isAddMode = !id;

    const add = () => {
        const addCar = async () => {
            await carFunction.addCar(name, price, company, description, image, id, isAddMode);
            return navigate("/students");
        }
        addCar();
    }

    useEffect(()=>{
        if (!isAddMode) {
            const getCar = async () => {
                const std = await carFunction.getCarById(id);
                if (std) {
                    setPrice(std.price);
                    setName(std.name);
                    setCompany(std.company);
                    setDescription(std.description)
                    setImage(std.image)
                }
            }
            getCar();
        }
    }, [])

    // const validate = () => {
    //     let tempErrors = {};
    //     tempErrors.name = name ? "" : "Name is required.";
    //     tempErrors.price = price ? "" : "Name is required.";
    //     setErrors(tempErrors);
    //     return Object.values(tempErrors).every(x => x === "");
    //   };

    return (
        <>
            <input type="hidden" value={id} />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Desription" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Url" value={image} onChange={(e) => setImage(e.target.value)} />
            <button onClick={()=>add()}>Save</button>
        </>

    );
}

export default FormCar;