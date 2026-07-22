import { Link } from "react-router-dom"

export const Adminheader=()=>{

 const name=localStorage.getItem("name")   

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
</ul>



</div>



</div>


</>


)


}