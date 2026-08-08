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

<nav>

<div className="container-fluid">

<div className="row bg-dark ">


    <div class="col-lg-4">

<div className="logo-section">
<i className="fa-solid fa-bolt bolt-icon"></i>
    <img src="/images/logo.png" alt="logo" className="web-logo"></img>


  <div className="webname">
      <h1 className="tittle">DOABA
         <span className="hamb-bars"> <i className="fa-solid fa-bars" ></i>

</span>
</h1>
        <h4 className="subtitle">STEEL FABRICATORS & WORKS</h4>
     </div>

</div>

</div>

    <div class="col-lg-5 nav-link">

     <ul className="nav-name d-flex list-unstyled  ">
<li><Link to={"/"}>Home</Link></li>
<li><Link to={"/shop"}>Shop</Link></li>
<li><Link to={"/about"}>About Us</Link></li>
<li><Link to={"/signup"}>Account<i class="fa-solid fa-caret-down"></i> </Link></li>
<li><Link to={"/contact"}>Contact Us</Link></li>
</ul>

      
     
  
    </div>


 <div class="col-lg-3 nav-user d-flex align-items-center px-5">


<div className="nav-right">

    {/* <div className="top-user"> */}

<h6 className="welcome-text">
  Welcome: <b>{name || "Guest"}</b>

  {name && (
    <span>
      <button className="logbtn" onClick={logoutfc}>
        <i
          className="fa-solid fa-right-from-bracket"
        
        ></i>
      </button>
    </span>
  )}
</h6>

    {/* </div> */}

<div className="nav-icon">

<Link to={"/login"}><i className="user-icon fa-solid fa-user" ></i></Link>
<Link to><i className="search-icon fa-solid fa-magnifying-glass" ></i></Link>
<Link to={"/wishlist"}><i className="fa-solid fa-heart" ></i></Link>
<Link to={"/cart"}><i className="fa-solid fa-cart-shopping" ></i></Link>

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