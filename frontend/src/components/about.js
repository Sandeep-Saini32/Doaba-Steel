import { Link } from "react-router-dom"

export const About=()=>{

return(
<>
<section className="page-banner">
<div className="container">
  <div className="row page-row">

   <div className="col-12 page-content">
    
    <h1>About Us</h1>
    <p><Link to={"/"}><span className="home-text">Home</span></Link>
      <i className="fa-solid fa-greater-than "></i> 
      About</p>
    
    </div> 

  </div>

</div>


</section>




</>


)


}