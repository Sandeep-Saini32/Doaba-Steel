import { Link } from "react-router-dom"

export const Adminheader=()=>{


return(
<>
<div className="container-fluid">
<div className="row">
<ul className="d-flex list-unstyled gap-4">

<li>Dashboard</li>
<li><Link to={"product"}>product</Link></li>
<li><Link to={"order"}>order</Link></li>
<li><Link to={"login"}>login</Link></li>
<li>customers</li>


</ul>


</div>



</div>


</>


)


}