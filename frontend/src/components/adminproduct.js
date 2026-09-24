import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Adminproduct=()=>{  

// selected category
const[procategory,setprocategory]=useState("")

const [proname,setproname]=useState("")
const [prosize,setprosize]=useState("")
const [proprice,setproprice]=useState("")
const [prodetail,setprodetail]=useState("")
const [propic,setpropic]=useState("")


// getting categories from backend
const [getcat,setgetcat]=useState([])

useEffect(()=>{
    getcategory()
},[])



// for gettinng product
const [savepro,setsavepro]=useState([])

useEffect(()=>{
getproduct()

},[])

// for edit
const[oldpic,setoldpic]=useState("")
const[proid,setproid]=useState("")

// for changing btns
const[isedit,setisedit]=useState(false)



// getting categories data
const getcategory=async()=>{

const savecatdata=await fetch(" http://localhost:9000/api/getsavecat",{
method:"get"

})

if(savecatdata){

    const catdata=await savecatdata.json()

   if(catdata.statuscode===1){
    setgetcat(catdata.allcategory)
    // alert("category name fetched")
   } 

   else{
    alert("category name not fetched")
   }
}

}




// for saving
const proadd=async(e)=>{
    e.preventDefault()

    const prodata=new FormData()
prodata.append("procategory",procategory)
prodata.append("proname",proname)
prodata.append("prosize",prosize)
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
    // alert("product data saved")

  setprocategory("")  
setproname("")
    setprosize("")
    setproprice("")
    setprodetail("")
    setpropic("")
    

    getproduct()
}
else{
    alert("product data not saved")
}

}
}

// for gettinng product

const getproduct=async()=>{

    const saveprodata=await fetch("http://localhost:9000/api/getsavepro",{
method:"get"


    })

  if(saveprodata){

    const data= await saveprodata.json()

if(data.statuscode===1){
    // alert("product fetched")
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

    setprocategory(pdata.procategory)
   setproname(pdata.proname)
   setprosize(pdata.prosize)
   setproprice(pdata.proprice)
   setprodetail(pdata.prodetail) 
   setpropic(pdata.propic)
   
   setoldpic(pdata.propic)
   setproid(pdata._id)

setisedit(true)

}

// for update

const proup=async(e)=>{
    e.preventDefault()

const updatedata= new FormData()

updatedata.append("procategory",procategory)
updatedata.append("proname",proname)
updatedata.append("prosize",prosize)
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

setprocategory("")
   setproname("")
    setprosize("")
    setproprice("")
    setprodetail("")
    setpropic("")
    setoldpic("")
    setproid("")

    setisedit(false)
    
    getproduct()
}
else{
    alert("pro data not updated")
}

}
}






return(
<>


<section className="page-banner">
<div className="container">
  <div className="row page-row">

   <div className="col-12 page-content">
    
    <h1>Products</h1>
    <p><Link to={"/adminhome"}><span className="home-text">Dashboard</span></Link>
      <i className="fa-solid fa-greater-than "></i> 
      Products</p>
    
    </div> 

  </div>

</div>

</section>



{/* PRODUCT FORM */}

<section className=" pro-form">

<div className="container">

<form>
<div className="row form-row g-4 ">


<div className=" col-lg-3 col-md-4 col-sm-6">
<label><b>Select Category</b><br/>

<div className="catbox">
<select className="catname-text" value={procategory}
 onChange={(e)=>setprocategory(e.target.value)}>

    <option>
        Category Name
    </option>

{
    getcat.map((item,index)=>(

        <option key={index}>{item.catname}

        </option>

  ))
}

</select>
<i className="fa-solid fa-angle-down"></i>

</div>
</label>

</div>


<div className="col-lg-3 col-md-4 col-sm-6">

 <label><b>Product Name</b><br/>
    <input className="protext-box" type="text"placeholder="Enter product name" value={proname}onChange={(e)=>setproname(e.target.value)}>
    </input>
    </label>

</div>


<div className=" col-lg-3 col-md-4 col-sm-6 ">

 <label><b>Product Size</b><br/>
    <input className="protext-box" type="text"placeholder="Enter product size" value={prosize}onChange={(e)=>setprosize(e.target.value)}>
    </input>
    </label>

</div>


<div className="col-lg-3 col-md-5 col-sm-6">

<label><b>Product Price <i class="fa-solid fa-indian-rupee-sign"></i></b><br/>
    <input className="proprice-box" type="number" placeholder="Enter product price" value={proprice}onChange={(e)=>setproprice(e.target.value)}>
    </input>
    </label>
</div>


<div className="col-lg-4 col-md-7 col-sm-5">
    
 <label><b>Product Picture   <i class="fa-solid fa-cloud-arrow-up"></i></b><br/>
 <input className="propic-box" type="file" onChange={(e)=>setpropic(e.target.files[0])}>
 </input>
 </label>

</div>


<div className=" col-lg-8 col-md-8 col-sm-7">
  <label className="w-100">
    <b>Product Details</b>
    <br />

    <textarea
      className="prodetail-box"
      name="prodetail"
      id="prodetail"
      placeholder="Enter product features, details, material etc."
      value={prodetail}
      onChange={(e) => setprodetail(e.target.value)}
    />
  </label>
</div>


<div className="col-lg-3 col-md-4 col-sm-5 prosubmit-btn">
    <button onClick={isedit ?proup:proadd}>
        
    {isedit?"Update Product":"Submit Product"}
    </button>

</div>


<div className="col-12 gy-2">
    <hr className="proform-line"/>

</div>



</div>

</form>

</div>

</section>






{/* PRODUCT LIST */}

<section className="pro-list">

    <div className="container">

<div className="row">

    <div className="col-lg-6 col-sm-6">

    <h1><b>Product List</b></h1>
</div>



<div className="col-lg-6 col-sm-6 d-flex pro-search-box">
    <input type="text" placeholder="Search products" ></input>

<select>
        <option>All categories</option>
    </select>

</div>




</div>



{/* TABLE STARTED */}
<div className="row">

    <div col-12>

<div className="d-none d-lg-block">

<div className="table-responsive">

     <table className="pro-table">

            <thead>

                <tr>
                    <th className="img-head">Image</th>
                    <th className="category-head">Category</th>
                    <th className="name-head">Product Name</th>
                    <th className="size-head">Size</th>
                    <th className="price-head">Price</th>
                    <th className="detail-head">Details</th>
                    <th className="date-head">Added On</th>
                    <th className="action-head">Actions</th>

                </tr>
            </thead>

            <tbody>

{
    savepro.map((item,index)=>(

<tr  key={index}>
             <td className="pro-form-img">
         
            <img
            src={`http://localhost:9000/${item.propic}`}
            alt={item.proname}
            className="table-pro-img"
          />


          </td>

          <td>{item.procategory}</td>

          <td>{item.proname}</td>

          <td>{item.prosize}</td>

          <td className="form-ruppee">
            <i class="fa-solid fa-indian-rupee-sign"></i>
           {Number(item.proprice).toLocaleString("en-IN")}
          </td>

          <td>{item.prodetail}</td>

          <td>{new Date(item.addedon).toLocaleDateString("en-GB",{

           day:"2-digit",
           month:"short",
           year:"numeric"
           }
         )}
         </td>

          <td className="form-btn">
             <button onClick={()=>{proedit(item)}}><i className="fa-regular fa-pen-to-square"></i></button>
            <button  onClick={()=>{prodell(item._id)}}><i className="fa-regular fa-trash-can"></i></button>
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
    savepro.map((item,index)=>(


 <div className="mobile-pro-card" key={index}>

        <div className="row mobile-row">

          {/* Image */}
          <div className="col-4 col-sm-3">
            
               <img
            src={`http://localhost:9000/${item.propic}`}
            alt={item.proname}
            className="mobile-pro-img"
          />


          </div>

          {/* Product Name */}
          <div className="col-8 col-sm-6">
            <h4>{item.proname}</h4>

             <p className="pro-name-category"><b>Category:</b> {item.procategory}</p>

               <div className="pro-size-price">

                 <p><b>Size:</b> {item.prosize}</p>
               <p><b>Price:</b><i class="fa-solid fa-indian-rupee-sign"></i>{Number(item.proprice).toLocaleString("en-IN")}</p>

               </div>

            <p className="pro-mobile-detail">
             
             {item.prodetail}
            </p>

          </div>


          <div className="col-12 col-sm-3 mobile-logo">
            <p className="mobile-date"><b>Added On:</b> {new Date(item.addedon).toLocaleDateString("en-GB",{
              day: "2-digit",
              month: "short",
              year: "numeric"
            })}
            
            </p>

            <div className="mobileform-btn">
                <button onClick={()=>{proedit(item)}}><i className="fa-regular fa-pen-to-square"></i></button>
            <button  onClick={()=>{prodell(item._id)}}><i className="fa-regular fa-trash-can"></i></button>
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

<label>Select Category

<select value={procategory}
 onChange={(e)=>setprocategory(e.target.value)}>

    <option>
        Category Name

    </option>

{
    getcat.map((item,index)=>(

        <option key={index}>{item.catname}

        </option>


    ))
}


</select>

</label><br/>
    
    <label>product name<input type="text" value={proname}onChange={(e)=>setproname(e.target.value)}></input></label><br/>
    <label>product price<input type="number" value={proprice}onChange={(e)=>setproprice(e.target.value)}></input></label><br/>
    <label>product detail<input type="text" value={prodetail}onChange={(e)=>setprodetail(e.target.value)}></input></label><br/>
    <label>product pic<input type="file" onChange={(e)=>setpropic(e.target.files[0])}></input></label><br/>
    <button onClick={proadd}>submit</button>
    
</form>

<div className="container">

<div className="row">


map functionfor get method

{

savepro.map((item,index)=>(
<div className="col-lg-2 col-md-4 col-sm-6 col-6" key={index}>
    {/* <div class="col-lg-12 bg-dark text-white p-3"> */}


{/* <img
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
</div> */} 



</>


)

}