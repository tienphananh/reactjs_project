import ListCar from "../Admin/admin";
import FormCar from "../Admin/form";
import HomePage from "../component/home";
import ProductList from "../component/productList";


const routes = [
    {path:"/listCar", component: ListCar},
    {path:"/car/form/:id?", component: FormCar},
    {path:"/", component: HomePage},
    {path:"/productList", component: ProductList}
]

export {routes}