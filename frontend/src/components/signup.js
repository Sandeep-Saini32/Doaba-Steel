import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Signup=()=>{

  const navigate=useNavigate()

  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [pass,setpass]=useState("")
  const [cfpass,setcfpass]=useState("")

  const adduser=async(e)=>{
    e.preventDefault()

 const data={name,email,pass,cfpass}  
 
 const saveuser=await fetch("http://localhost:9000/api/signup",{
method:"post",
body:JSON.stringify(data),
headers:{
  "content-type":"application/json;charset=utf-8"
}

 })
  
if(saveuser.ok){
const sv=await saveuser.json()
if(sv.statuscode===1){
  alert("register done")
  navigate("/login")
}
else{
  alert("register not done")
}


}

 
}

return(
<>
<section className="page-banner">
<div className="container">
  <div className="row page-row">

   <div className="col-12 page-content">
    
    <h1>Registration</h1>
    <p><Link to={"/"}><span className="home-text">Home</span></Link>
      <i className="fa-solid fa-greater-than "></i> 
      Registration</p>
    
    </div> 

  </div>

</div>


</section>

<form>

<label>name<input type="text" onChange={(e)=>setname(e.target.value)}></input></label><br/>
<label>email<input type="email" onChange={(e)=>setemail(e.target.value)}></input></label><br/>
<label>password<input type="password" onChange={(e)=>setpass(e.target.value)}></input></label><br/>
<label>confirm password<input type="passwoed"  onChange={(e)=>setcfpass(e.target.value)}></input></label>
<button onClick={adduser}>register</button>

</form>

</>


)



}