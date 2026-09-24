import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Shop=()=>{

  const navigate=useNavigate()
  const[procategory,setprocategory]=useState("")

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
      // alert("product fetched")
      setsavepro(data.allproduct)
  }
  
  else{
      alert("product not fetched")
  }
  
    }  
  
  }



  // getting categories from backend
const [getcat,setgetcat]=useState([])

useEffect(()=>{
    getcategory()
},[])


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

    

return(
<>

<section className="page-banner">
<div className="container">
  <div className="row page-row">

   <div className="col-12 page-content">
    
    <h1>Shop</h1>
    <p><Link to={"/"}><span className="home-text">Home</span></Link>
      <i className="fa-solid fa-greater-than "></i> 
      Shop</p>
    
    </div> 

  </div>

</div>


</section>


{/* CHOOSE CATEGORY BTNS */}

<section className="shoptype-boxses">
<div className="container">
<div className="row catboxses-row">

<div className=" col-6 catbtn">

   <i class="fa-solid fa-table-cells-large cells-icon"></i>

<select value={procategory}
 onChange={(e)=>setprocategory(e.target.value)}>

    <option>
       All Categories
    </option>

{
    getcat.map((item,index)=>(

        <option key={index}>{item.catname}

        </option>

  ))
}

</select>

</div>


<div className="col-6 sort-box">

<select>

    <option>
        Sort by: <span className="sort-word">Latest</span>
    </option>

</select>


</div>


</div>

</div>

</section>




{/* PORIDUCT ROWS: */}

<section className="shop-sec">


<div className="container">

<div className="row">


{/* map functionfor get method */}

{

savepro.map((item,index)=>(
<div className="col-lg-3 col-md-4 mb-4 col-6" key={index}>

  <div className="shop-card">



<img
src={`http://localhost:9000/${item.propic}`}
className="shop-img"

/> 


<div className="shop-info">
<p className="p-name"><b>{item.proname}</b></p>  
<p className="p-price"><i className="fa-solid fa-indian-rupee-sign shop-ruppee"></i><b>{Number(item.proprice).toLocaleString("en-IN")}</b></p>  

<Link to={`/shopdetail/?id=${item._id}`}>

<button>View Details
  <i className="fa-solid fa-arrow-right-long shop-rightarrow">
  </i></button>


</Link>

</div>
 

</div>


    </div>





))


}

</div>
</div>

</section>



</>


)


} 


