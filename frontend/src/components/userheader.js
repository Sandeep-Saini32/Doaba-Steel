import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Usercontext } from "./usercontext"

export const Userheader=()=>{

    const navigate=useNavigate()
    const {setrole}=useContext(Usercontext)

//   showing name:  
    const name=localStorage.getItem("name") 

    // logout function
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

<li><Link to={"/"}> home</Link></li>
<li><Link to={"shop"}>shop</Link></li>
<li><Link to={"login"}>login</Link></li>
<li><Link to={"signup"}>signup</Link></li>
<li><Link to={"contact"}>Contactus</Link></li>

<li className="barname">welcome:{name}</li>
<li><button onClick={logoutfc}>logout</button></li>
</ul>



</div>



</div>


</>


)


}