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

<header>
<nav className="navbar bg-dark">

    <div className="container-fluid ">
  <div className="row">
     
   <div className="nav-section">

<div className="logo-section">
<i className="fa-solid fa-bolt bolt-icon"></i>
    <img src="/images/logo.png" alt="logo" className="web-logo"></img>
</div>

       <div className="webname">
      <h1 className="tittle">DOABA</h1>
        <h4 className="subtitle">STEEL FABRICATORS & WORKS</h4>
     </div>


<div className="navlink">

<ul className=" nav-name d-flex list-unstyled  ">
<li><Link to={"/"}>Home</Link></li>
<li><Link to={"shop"}>Shop</Link></li>
<li><Link to={"about"}>About Us</Link></li>
<li><Link to={"signup"}>Account</Link></li>
<li><Link to={"contact"}>Contact Us</Link></li>
</ul>
</div>

<div className="nav-right">

    <div className="top-user">

<h6 className="welcome-text">
  Welcome: <b>{name || "Guest"}</b>

  {name && (
    <span>
      <button onClick={logoutfc}>
        <i
          className="fa-solid fa-right-from-bracket"
          style={{ color: "rgb(255, 255, 255)" }}
        ></i>
      </button>
    </span>
  )}
</h6>

    </div>

<div className="nav-icon">
<i class="fa-solid fa-user" style={{color:"white"}}></i>
<i class="fa-solid fa-magnifying-glass" style={{color:"rgb(255, 255, 255)"}}></i>
<i class="fa-solid fa-heart" style={{color:"rgb(255, 255, 255)"}}></i>
<i class="fa-solid fa-cart-shopping" style={{color: "rgb(255, 255, 255)"}}></i>
</div>


</div>


</div>
</div>

    </div>




</nav>


</header>

</>


)


}