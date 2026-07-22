import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Usercontext } from "./usercontext"

export const Adminheader=()=>{

    const navigate=useNavigate()
    const {setrole}=useContext(Usercontext)

//   showing name:  
const name=localStorage.getItem("name")  

// logout function:
const logoutfc=()=>{

 alert("logout succeffully")   
localStorage.removeItem("role")
localStorage.removeItem("name")

setrole("")
navigate("/login")

}

return(
<>
<div className="container-fluid">
<div className="row">
<ul className="d-flex list-unstyled gap-4">

<li>Dashboard</li>
<li><Link to={"product"}>product</Link></li>
<li><Link to={"order"}>order</Link></li>
<li><Link to={"admincat"}>categories</Link></li>
<li><Link to={"customerinfo"}>customers</Link></li>
<li><Link to={"login"}>login</Link></li>

<li className="barname">welcome:{name}</li>

<l1><button onClick={logoutfc}>logout</button></l1>
</ul>



</div>



</div>


</>


)


}