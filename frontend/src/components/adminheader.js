import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Usercontext } from "./usercontext"

export const Adminheader=()=>{

    const navigate=useNavigate()
    
    const {setrole}=useContext(Usercontext)

      const [sidebaropen,setsidebaropen]=useState(false)

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


 <header>

<nav>

<div className="container-fluid">

<div className="row bg-dark head-row  ">

    <div class=" col-lg-4 col-md-6 ">

<div className="logo-section">
<i className="fa-solid fa-bolt bolt-icon"></i>
    <img src="/images/logo.png" alt="logo" className="web-logo"></img>


  <div className="webname">
      <h1 className="tittle">DOABA

         <span className="hamb-bars" onClick={()=>setsidebaropen(true)}>
           <i className="fa-solid fa-bars" ></i>
</span>
</h1>
        <h4 className="subtitle">STEEL FABRICATORS & WORKS</h4>
     </div>

</div>
</div>

   
    <div class=" col-lg-5 col-md-3  nav-link">

     <ul className="nav-name d-flex list-unstyled  ">
<li><Link to={"/adminhome"}> Dashboard</Link></li>
<li><Link to={"/order"}>Orders</Link></li>
<li><Link to={"/admincat"}>Categories</Link></li>
<li><Link to={"/adminproduct"}>Products</Link></li>
<li><Link to={"/customerinfo"}>Customers</Link></li>
</ul>

 </div>


 <div class="col-lg-3 col-md-3   nav-user d-flex align-items-center">


<div className="nav-right">


<h6 className="welcome-text" style={{paddingRight:"0px"}}>
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

   

</div>

 </div>



</div>


</div>

</nav>

</header> 




{/* FOR SIDEBAR */}

{sidebaropen && (
  <>

<div className="sidebar-overlay"
 onClick={()=>setsidebaropen(false)}>
</div>

<div className="mobile-bar">

  <div className="close-row">
     
      <button className="exit-icon" onClick={()=>setsidebaropen(false)}>
    <i class="fa-solid fa-x"></i>
  </button>

  </div>

  <div className="sidebar-top">

    <h1>DOABA</h1>

    <button className="loginbtn" onClick={() => {
        if (name) {
            logoutfc();
        } else {
            navigate("/login");
        }
    }}>
        {name ? "Logout" : "Login"}
        <i className="user-icon fa-solid fa-user" ></i>
    </button>

</div>

  <h6 className="sidebar-name">
    Welcome : <b>{name ? name : "Guest"}</b>
</h6>


    <div className="sidebar-link">

     <ul className="sidebar-nav  list-unstyled  ">

<li><Link to={"/adminhome"}> Dashboard</Link></li>
<li><Link to={"/order"}>Orders</Link></li>
<li><Link to={"/admincat"}>Categories</Link></li>
<li><Link to={"/adminproduct"}>Products</Link></li>
<li><Link to={"/customerinfo"}>Customers</Link></li>
</ul>

 </div>


</div>




</>


)

}



</>


)


}