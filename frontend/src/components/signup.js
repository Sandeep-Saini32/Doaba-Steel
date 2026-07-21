import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
<h1>Registration</h1>

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