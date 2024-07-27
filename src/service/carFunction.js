import {db} from "./dexie";

const addCar = async (name, price, description, company, id, isAddMode) => {
    if (isAddMode) {
        db.car.add({name:name, price:price, description: description, company:company});
    } else {
        db.car.update(parseInt(id), {name:name, price:price, description: description, company:company});
    }
}


const getAllCar = async () => {
    return await db.car.toArray();
}

const deleteCar = async (id) => {
    db.car.delete(parseInt(id));
    return await db.car.toArray();
}
 
const getCarById = async (id) => {
    return await db.car.get(parseInt(id));
}
export {addCar,getAllCar,getCarById,deleteCar}