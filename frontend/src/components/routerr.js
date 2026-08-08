import { Route, Routes } from "react-router-dom"
import { Landinghome } from "./landinghome"
import { Adminhome } from "./adminhome"
import { Signup } from "./signup"
import { Login } from "./login"
import { Userheader } from "./userheader"
import { Adminheader } from "./adminheader"
import { Adminproduct } from "./adminproduct"
import { Order } from "./order"
import { Shop } from "./shop"
import { Contact } from "./contact"
import { Customerinfo } from "./customerinfo"
import { Admincat } from "./admincat"
import { useContext } from "react"
import { Usercontext } from "./usercontext"
import { About } from "./about"
import { Wishlist } from "./wishlist"
import { Cart } from "./cart"

export const Routerr=()=>{

    const {role}=useContext(Usercontext)

return(
<>
<Routes>
<Route path="/" element={ role==="admin"?<Adminhome/>:<Landinghome/>} />
<Route path="adminhome" element={<Adminhome/>} />
<Route path="signup" element={<Signup/>} />
<Route path="login" element={<Login/>} />
<Route path="userheader"element={<Userheader/>}/>
<Route path="adminheader"element={<Adminheader/>}/>
<Route path="adminproduct"element={<Adminproduct/>}/>
<Route path="order"element={<Order/>}/>
<Route path="shop"element={<Shop/>}/>
<Route path="contact"element={<Contact/>}/>
<Route path="customerinfo"element={<Customerinfo/>}/>
<Route path="admincat"element={<Admincat/>}/>
<Route  path="about" element={<About/>}/>
<Route  path="wishlist"element={<Wishlist/>} />
<Route  path="cart"element={<Cart/>} />


</Routes>


</>


)


}