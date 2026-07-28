import { useEffect } from "react"
import { useState } from "react"

export const Adminproduct=()=>{

const [proname,setproname]=useState("")
const [proprice,setproprice]=useState("")
const [prodetail,setprodetail]=useState("")
const [propic,setpropic]=useState("")


// for edit
const[oldpic,setoldpic]=useState("")
const[proid,setproid]=useState("")


const proadd=async(e)=>{
    e.preventDefault()

    const prodata=new FormData()
prodata.append("proname",proname)
prodata.append("proprice",proprice)
prodata.append("prodetail",prodetail)
prodata.append("propic",propic)


const addresult=await fetch("http://localhost:9000/api/addproduct",{
method:"post",
body:prodata,

})

if(addresult.ok){
    const res= await addresult.json()
if(res.statuscode===1){
    alert("product data saved")
    getproduct()
}
else{
    alert("product data not saved")
}

}
}

// for gettinng product
const [savepro,setsavepro]=useState([])

useEffect(()=>{
getproduct()

},[])

const getproduct=async()=>{

    const saveprodata=await fetch("http://localhost:9000/api/getsavepro",{
method:"get"


    })

  if(saveprodata){

    const data= await saveprodata.json()

if(data.statuscode===1){
    alert("product fetched")
    setsavepro(data.allproduct)
}

else{
    alert("product not fetched")
}

  }  

}


// for delete

const prodell=async(id)=>{

  const dellresult=await fetch(`http://localhost:9000/api/deleteproduct/${id}`,{
method:"delete"

})

if(dellresult){
    const delldata= await dellresult.json()

   if(delldata.statuscode===1){
    alert("product deleted")
    getproduct()
   } 

   else{
    alert("product not deleted")
   }

}

}
// for edit

const proedit=(pdata)=>{

   setproname(pdata.proname)
   setproprice(pdata.proprice)
   setprodetail(pdata.prodetail) 
   setpropic(pdata.propic)
   
   setoldpic(pdata.propic)
   setproid(pdata._id)
}

// for update

const proup=async(e)=>{
    e.preventDefault()

const updatedata= new FormData()

updatedata.append("proname",proname)
updatedata.append("proprice",proprice)
updatedata.append("prodetail",prodetail)
updatedata.append("propic",propic)

updatedata.append("oldpic",oldpic)

const upresult=await fetch(`http://localhost:9000/api/proupdate/${proid}`,{
method:"put",
body:updatedata

})

if(upresult.ok){
  const upres= await upresult.json()

if(upres.statuscode===1){
    alert("pro data updated")
}
else{
    alert("pro data not updated")
}

}

}






return(
<>
<h1>product page</h1>

<form>
    <label>product name<input type="text" value={proname}onChange={(e)=>setproname(e.target.value)}></input></label><br/>
    <label>product price<input type="number" value={proprice}onChange={(e)=>setproprice(e.target.value)}></input></label><br/>
    <label>product detail<input type="text" value={prodetail}onChange={(e)=>setprodetail(e.target.value)}></input></label><br/>
    <label>product pic<input type="file" onChange={(e)=>setpropic(e.target.files[0])}></input></label><br/>
    <button onClick={proadd}>submit</button>
    
</form>

<div className="container">

<div className="row">


{/* map functionfor get method */}

{

savepro.map((item,index)=>(
<div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>

<img
src={`http://localhost:9000/${item.propic}`}
width={"100px"}

/>  
<p>{item.proname}</p>  
<p>{item.proprice}</p>  
<p>{item.prodetail}</p> 

<button onClick={proup}>update</button> 
<button onClick={()=>{proedit(item)}}>edit</button>
<button onClick={()=>{prodell(item._id)}}>delete</button>
</div>
))

}

</div>
</div>



</>


)

}