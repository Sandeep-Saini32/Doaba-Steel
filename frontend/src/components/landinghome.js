import { useEffect, useState } from "react"

export const Landinghome=()=>{

// for gettinng product
const [savepro,setsavepro]=useState([])

useEffect(()=>{
getproduct()

},[])

// getting categories
const [getcat,setgetcat]=useState([])
useEffect(()=>{
getcategory()

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






return(
<>

{/* BANNER STARTED */}
<section className="landing-banner">

<div className="container">

  <div className="row banner-row">


<div className="col-md-6">

<img src="/images/welding-banner.jpg" className="bannerimg"></img>

</div>


<div className="col-md-6  banner-text">


<div className="banner-content">

<h1>STONGER STEEL,<br/>
<span className="banner-subtitle">STONGER FUTURE</span>
</h1>

<p>
We specialize in high-quality steel fabrication,
welding works, gates, grills, doors, windows,
railings and custom metal solutions.
</p>
</div>


<div className="banner-btn">

<button>VIEW PRODUCTS <i class="fa-solid fa-arrow-right"></i></button>
<button>CONTACT US <i class="fa-solid fa-arrow-right"></i></button>
</div>


</div>



  </div>



</div>

</section>


{/* BANNER ICONS: */}

<section className="banner-icon-sec">

<div className="container">
  <div className="row">

    <div className="col-lg-3 col-sm-6 col-6 banner-icon">
      <h1><i class="fa-solid fa-screwdriver-wrench"></i></h1>
      <p><b>Custom Fabrication</b><br/>
      as per your requirement
      </p>
    </div>


 <div className="col-lg-3  col-sm-6 col-6 banner-icon">
      <h1><i class="fa-solid fa-shield"></i></h1>
      <p><b>Strong & Durable</b><br/>
     Built to last for years 
      </p>
    </div>



 <div className="col-lg-3  col-sm-6 col-6 banner-icon">
      <h1><i class="fa-solid fa-layer-group"></i></h1>
      <p><b>Quality Materials</b><br/>
     Premium steel used
      </p>
    </div>




    
 <div className="col-lg-3  col-sm-6 col-6 banner-icon">
      <h1><i class="fa-solid fa-truck"></i></h1>
      <p><b>On-Time Delivery</b><br/>
     Your project, our priority
      </p>
    </div>



  </div>

</div>

</section>




{/* CATEGORY img ROW: */}

<section className="cat-sec">

  <div className="container">

<div className="row">

  <div className="col-12 text-white heading-text">
<p className="capital-heading">EXPLOUR OUR RANGE</p>  
<h2><b>Shop by Category</b></h2>
<p className="heading-pera">Find the perfect steel products for your home,office or industrial space.</p>

  </div>

</div>


<div className="row gx-5 home-cat-row">

{
getcat.map((item,index)=>(

<div className="col-sm-3 col-6 home-categories" key={index}>

<img
src={`http://localhost:9000/${item.catpic}`}
className="home-cat-img"
/>

<p>{item.catname}</p>  
 

</div>



))


}



</div>


  </div>


</section>





{/* <div className="container">

<h1>user home page</h1>
<div className="row">


map functionfor get method

{

savepro.map((item,index)=>(
<div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>

<img
src={`http://localhost:9000/${item.propic}`}
width={"150px"}

/>  
<p>{item.proname}</p>  
<p>{item.proprice}</p>  
<p>{item.prodetail}</p>  

</div>



))


}

</div>
</div> */}

<div className="container">
    <table>
<tr>
    <td>day 1</td>
    <td>day 2</td>
    <td>day 3</td>
</tr>

<tr>
    <td>day 4</td>
    <td>day 5</td>
    <td>day 6</td>
</tr>

    </table>

</div>


<div class="container">
  <div class="row">

    <div class="col-lg-4  col-md-12 col-sm-6 bg-dark text-white p-5">
      Header
    </div>

    <div class="col-lg-4 col-md-6 col-sm-6  bg-warning p-5">
      Sidebar
    </div>

    <div class="col-lg-4 col-md-6 col-sm-12  bg-info p-5">
      Content
    </div>

  </div>
</div>



</>

)


}