import { Link } from "react-router-dom"

export const Customerinfo=()=>{

return(
<>
<section className="page-banner">
<div className="container">
  <div className="row page-row">

   <div className="col-12 page-content">
    
    <h1>Customers</h1>
    <p><Link to={"/adminhome"}><span className="home-text">Dashboard</span></Link>
      <i className="fa-solid fa-greater-than "></i> 
      Customers</p>
    
    </div> 

  </div>

</div>

</section>

</>


)


}