import { useEffect, useRef } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

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

// for clearing data
const catpicref=useRef(null)

// for changing btns
const [iscatedit,setiscatedit]=useState(false)


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
    // alert("cat data saved")

setcatname("")
setcatpic("")

catpicref.current.value = ""

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
// alert("category fetched")
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

setiscatedit(true) 

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

setcatname("")
setcatpic("")
setoldcatpic("")
setoldcatid("")

catpicref.current.value = ""

  setiscatedit(false)

  getcategory()
}

else{
  alert("category not updated")
}

}

}




    

return(

<>
<section className="page-banner">
<div className="container">
  <div className="row page-row">

   <div className="col-12 page-content">
    
    <h1>Categories</h1>
    <p><Link to={"/adminhome"}><span className="home-text">Dashboard</span></Link>
      <i className="fa-solid fa-greater-than "></i> 
      Categories</p>
    
    </div> 

  </div>

</div>

</section>



{/* CATEGORY FORM */}

<section className=" category-form">

<div className="container">

<form>
<div className="row form-row g-4 ">



<div className="col-lg-4 col-md-6 col-sm-6">

 <label><b>Category Name</b><br/>
    <input className="categorytext-box" type="text"placeholder="Enter product name" value={catname}onChange={(e)=>setcatname(e.target.value)}>
    </input>
    </label>

</div>


<div className="col-lg-5 col-md-6 col-sm-6">
    
 <label><b>Category Picture   <i class="fa-solid fa-cloud-arrow-up"></i></b><br/>
 <input ref={catpicref} className="categorypic-box" type="file" onChange={(e)=>setcatpic(e.target.files[0])}>
 </input>
 </label>

</div>




<div className="col-lg-3 categorysubmit-btn">
    <button onClick={iscatedit ?catup:savecat}>
        
    {iscatedit?"Update Category":"Submit Category"}
    </button>

</div>


<div className="col-12 gy-2">
    <hr className="categoryform-line"/>

</div>



</div>

</form>

</div>

</section>



{/* CATEGORY LIST */}

<section className="category-list">

    <div className="container">

<div className="row">

    <div className="col-lg-6 col-sm-6">

    <h1><b>Category List</b></h1>
</div>



<div className="col-lg-6 col-sm-6 d-flex cat-search-box">
    <input type="text" placeholder="Search Categories" ></input>


</div>

</div>



{/*CATEGORY TABLE STARTED */}

<div className="row">

    <div col-12>

<div className="d-none d-lg-block">

<div className="table-responsive">

     <table className="category-table">

            <thead>

                <tr>
                    <th className="catimg-head">Image</th>
                    <th className="catname-head">Category Name</th>
                    <th className="catpro-head">Products</th>
                    <th className="catdate-head">Added On</th>
                    <th className="cataction-head">Actions</th>

                </tr>
            </thead>

            <tbody>

{
  getcat.map((item,index)=>(

<tr  key={index}>
             <td className="cat-form-img">
         
            <img
            src={`http://localhost:9000/${item.catpic}`}
            alt={item.proname}
            className="table-cat-img"
          />


          </td>

          <td>{item.catname}</td>
          <td>{ 1 }</td>

          <td>{new Date(item.cataddedon).toLocaleDateString("en-GB",{

           day:"2-digit",
           month:"short",
           year:"numeric"
           }
         )}
         </td>

          <td className="categoryform-btn">
             <button onClick={()=>{catedit(item)}}><i className="fa-regular fa-pen-to-square"></i></button>
            <button  onClick={()=>{catdell(item._id)}}><i className="fa-regular fa-trash-can"></i></button>
          </td>

 
  </tr>

    ))
}

                
     </tbody>

 </table>

</div>

</div>





{/* MOBILE CARDS - below LG : 992px*/}

<div className="d-lg-none">

{
    getcat.map((item,index)=>(


 <div className="mobile-cat-card" key={index}>

        <div className="row mobile-categoryrow">

          {/* Image */}
          <div className="col-md-4 col-sm-4 col-4">
            
               <img
            src={`http://localhost:9000/${item.catpic}`}
            alt={item.catname}
            className="mobile-cat-img"
          />


          </div>

          {/* Product Name */}
         
          <div className="col-md-3 col-sm-3 col-8 mt-2">
            <h2>{item.catname}</h2>

            <p><b>Products : 1</b></p>

            </div>


          <div className=" col-md-5 col-sm-5 col-12 mobile-cat-logo">
            <p className="mobile-cat-date"><b>Added On:</b> {new Date(item.cataddedon).toLocaleDateString("en-GB",{
              day: "2-digit",
              month: "short",
              year: "numeric"
            })}
            
            </p>

            <div className="mobile-catform-btn">
                <button onClick={()=>{catedit(item)}}><i className="fa-regular fa-pen-to-square"></i></button>
            <button  onClick={()=>{catdell(item._id)}}><i className="fa-regular fa-trash-can"></i></button>
            </div>
          </div>

          

        </div>

      </div>

   ))
    }
    
</div>

    
       
 </div>
</div>



    </div>




</section>
















{/* <form>
<label>Enter category name<input type="text" value={catname}onChange={(e)=>setcatname(e.target.value)}></input></label><br/>
 <label>Enter category image<input type="file" onChange={(e)=>setcatpic(e.target.files[0])}></input></label><br/>
<button onClick={savecat}>submit</button>
    
</form>

<div className="container">
<div className="row">

  
category map function

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
</div> */}





</>

)



}