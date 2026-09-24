import { Link } from "react-router-dom"

export const Contact=()=>{

return(
<>
<section className="page-banner">
<div className="container">
  <div className="row page-row">

   <div className="col-12 page-content">
    
    <h1>Contact Us</h1>
    <p><Link to={"/"}><span className="home-text">Home</span></Link>
      <i className="fa-solid fa-greater-than "></i> 
      Contact Us</p>
    
    </div> 

  </div>

</div>


</section>

</>


)


}