import { Route, Routes } from "react-router-dom"
import { Landinghome } from "./landinghome"
import { Adminhome } from "./adminhome"
import { Signup } from "./signup"
import { Login } from "./login"
import { Userheader } from "./userheader"
import { Adminheader } from "./adminheader"
import { Product } from "./product"
import { Order } from "./order"
import { Shop } from "./shop"
import { Contact } from "./contact"

export const Routerr=()=>{


return(
<>
<Routes>
<Route path="/" element={<Landinghome/>} />
<Route path="adminhome" element={<Adminhome/>} />
<Route path="signup" element={<Signup/>} />
<Route path="login" element={<Login/>} />
<Route path="userheader"element={<Userheader/>}/>
<Route path="adminheader"element={<Adminheader/>}/>
<Route path="product"element={<Product/>}/>
<Route path="order"element={<Order/>}/>
<Route path="shop"element={<Shop/>}/>
<Route path="contact"element={<Contact/>}/>

</Routes>


</>


)


}