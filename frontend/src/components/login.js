import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Usercontext } from "./usercontext"

export const Login=()=>{

    const navigate=useNavigate()
    const {setrole}=useContext(Usercontext)

    const [loginem,setloginem]=useState("")
    const [loginpass,setloginnpass]=useState("")

    const check= async(e)=>{
        e.preventDefault()

        const logindata={loginem,loginpass}

      const checkuser= await fetch("http://localhost:9000/api/loginpage",{

method:"post",
body:JSON.stringify(logindata),
headers:{
    "content-type":"application/json;charset=utf-8"
}

})

const ch=await checkuser.json()
if(ch.statuscode===1){
alert("login successfully")

// for getting name and role
localStorage.setItem("name",ch.name)
localStorage.setItem("role",ch.role)


setrole(ch.role)

if(ch.role==="admin"){
    navigate("/adminhome")
    
}
else{

    navigate("/")

}
}

else{
    alert("incoreect info")
}


      


    }

return(
<>
<h1>login page</h1>

<form>
<label>enter email<input type="email" onChange={(e)=>setloginem(e.target.value)}></input></label><br/>
<label>enter pass<input type="email" onChange={(e)=>setloginnpass(e.target.value)}></input></label><br/>
<button  onClick={check}>login</button>


</form>

</>


)


}