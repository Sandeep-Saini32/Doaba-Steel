import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Usercontext } from "./usercontext"

export const Userheader=()=>{

    const navigate=useNavigate()
    
    const {setrole}=useContext(Usercontext)

    const [sidebaropen,setsidebaropen]=useState(false)


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


 useEffect(()=>{

  if(sidebaropen){
document.body.style.overflow="hidden"

  }
  else{
    document.body.style.overflow="auto"

  }

  return()=>{
document.body.style.overflow="auto"

  }


 },[sidebaropen])


return(
<>

 <header>

<nav>

<div className="container-fluid">

<div className="row head-row  ">


{/* 1st div */}

    <div className=" col-lg-4 col-md-6 ">

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

{/* CENTER DIV */}
   
    <div class=" col-lg-5 col-md-3  nav-link">

     <ul className="nav-name d-flex list-unstyled  ">
<li><Link to={"/"}>Home</Link></li>
<li><Link to={"/shop"}>Shop</Link></li>
<li><Link to={"/about"}>About Us</Link></li>

 <li className="account-head">Account<i className="fa-solid fa-caret-down"></i>
                                
                                    <div class="account-drop">
                                        <ul class="acc-drop-list list-unstyled">
                                      <li>
                                                 <Link to={"/login"}>Login</Link>
                                            </li>
                                            <li>
                                                <Link to={"/signup"}>Registration</Link>
                                            </li>

                                         </ul>
                                    </div>
                                    </li>




<li><Link to={"/contact"}>Contact Us</Link></li>
</ul>

 </div>


{/* 3rd DIV */}

 <div class="col-lg-3 col-md-3 nav-user d-flex align-items-center">


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
<li><Link to={"/"}>Home</Link></li>
<li><Link to={"/shop"}>Shop</Link></li>
<li><Link to={"/about"}>About Us</Link></li>
<li><Link to={"/contact"}>Contact Us</Link></li>
</ul>

 </div>



<div className="sidebar-btn">
<Link to={"/wishlist"}><button><b>Wishlist</b><i className="fa-solid fa-heart" ></i></button></Link>
<button><b>search</b><i className="search-icon fa-solid fa-magnifying-glass" ></i></button>

</div>

</div>

</>
)
}








</>


)


}