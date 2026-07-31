import { useEffect } from "react"
import { useState } from "react"

export const Admincat=()=>{

const [catname,setcatname]=useState("")
const [catpic,setcatpic]=useState("")

// getting categories
const [getcat,setgetcat]=useState([])
useEffect(()=>{
getcategory()

},[])

const[oldcatpic,setoldcatpic]=useState("")
const[oldcatid,setoldcatid]=useState("")



// for saving
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
    getcategory()
  }  

else{
    alert("cat data not saved")
}

}}


// getting categories
const getcategory=async()=>{

const savecatdata= await fetch("http://localhost:9000/api/getsavecat",{
method:"get"

})

if(savecatdata){

  const catdata= await savecatdata.json()
  
  if(catdata.statuscode===1){
alert("category fetched")
setgetcat(catdata.allcategory)

}
else{
  alert(" category not fetched")
}

}

}

// delete category
const catdell= async(id)=>{

const dellcatresult=await fetch(`http://localhost:9000/api/deletecategory/${id}`,{
method:"delete"
})

if(dellcatresult){

  const dellcatdata= await dellcatresult.json()
if(dellcatdata.statuscode===1){
alert("category deleted")
getcategory()

}
else{
  alert("category not deleted")
}

}
}

// edit function
const catedit=(Edata)=>{

setcatname(Edata.catname)
setcatpic(Edata.catpic)

setoldcatpic(Edata.catpic)
setoldcatid(Edata._id)

}

// update function
const catup=async(e)=>{
  e.preventDefault()


  const updatecat= new FormData()

updatecat.append("catname",catname)
updatecat.append("catpic",catpic)
updatecat.append("oldcatpic",oldcatpic)


const upcatresult=await fetch(`http://localhost:9000/api/updatecategory/${oldcatid}`,{
method:"put",
body:updatecat

})

if(upcatresult.ok){
const upres= await upcatresult.json()

if(upres.statuscode===1){
  alert("category updated")
  getcategory()
}

else{
  alert("category not updated")
}

}

}




    

return(

<>
<h1>mannage categories</h1>

<form>
 <label>Enter category name<input type="text" value={catname}onChange={(e)=>setcatname(e.target.value)}></input></label><br/>
 <label>Enter category image<input type="file" onChange={(e)=>setcatpic(e.target.files[0])}></input></label><br/>
<button onClick={savecat}>submit</button>
    
</form>

<div className="container">
<div className="row">

  
{/* category map function */}

{
 getcat.map((item,index)=>(

<div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>

<img
src={`http://localhost:9000/${item.catpic}`}
width={"100px"}

/>
<p>{item.catname}</p>  
<button onClick={()=>{catedit(item)}}>edit</button>
<button onClick={catup}>update</button>
<button onClick={()=>{catdell(item._id)}}>delete</button>

</div>

 ))



}


</div>


</div>
</>

)



}