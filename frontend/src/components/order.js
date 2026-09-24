import { Link } from "react-router-dom"

export const Order=()=>{

return(
<>
<section className="page-banner">
<div className="container">
  <div className="row page-row">

   <div className="col-12 page-content">
    
    <h1>Orders</h1>
    <p><Link to={"/adminhome"}><span className="home-text">Dashboard</span></Link>
      <i className="fa-solid fa-greater-than "></i> 
      Orders</p>
    
    </div> 

  </div>

</div>

</section>

</>


)


}