import { useState } from "react"

export const Admincat=()=>{

const [catname,setcatname]=useState("")
const [catpic,setcatpic]=useState("")

const savecat=async(e)=>{
 e.preventDefault()

const catdata= new FormData()
catdata.append("catname",catname)
catdata.append("catpic",catpic)

const catresult=await fetch("http://localhost:9000/api/addcategory",{
method:"post",
body:catdata

})

if(catresult.ok){
    const catres=await catresult.json()

  if(catres.statuscode===1){
    alert("cat data saved")
  }  

else{
    alert("cat data not saved")
}

}}


    

return(

<>
<h1>mannage categories</h1>

<form>
 <label>Enter category name<input type="text" value={catname}onChange={(e)=>setcatname(e.target.value)}></input></label><br/>
 <label>Enter category image<input type="file" onChange={(e)=>setcatpic(e.target.files[0])}></input></label><br/>
<button onClick={savecat}>submit</button>
    
</form>


</>

)



}