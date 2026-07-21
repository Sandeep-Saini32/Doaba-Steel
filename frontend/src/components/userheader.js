import { Link } from "react-router-dom"

export const Userheader=()=>{

return(
<>
<div className="container-fluid">
<div className="row">
<ul className="d-flex list-unstyled gap-4">

<li>home</li>
<li><Link to={"shop"}>shop</Link></li>
<li><Link to={"login"}>login</Link></li>
<li><Link to={"signup"}>signup</Link></li>
<li><Link to={"contact"}>Contactus</Link></li>


</ul>


</div>



</div>


</>


)


}