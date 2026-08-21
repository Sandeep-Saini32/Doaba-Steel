import { useEffect, useState } from "react"

export const Landinghome=()=>{

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




return(
<>

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

<button>VIEW PRODUCTS <i class="fa-solid fa-arrow-right" style={{color:"rgb(255, 212, 59);"}}></i></button>
<button>CONTACT US <i class="fa-solid fa-arrow-right" style={{color:"rgb(255, 212, 59);"}}></i></button>
</div>


</div>



  </div>



</div>




</section>



<div className="container">

<h1>user home page</h1>
<div className="row">


{/* map functionfor get method */}

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
</div>

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

    <div class="col-lg-4  col-md-12  bg-dark text-white p-5">
      Header
    </div>

    <div class="col-lg-4 col-md-6 bg-warning p-5">
      Sidebar
    </div>

    <div class="col-lg-4 col-md-6 bg-info p-5">
      Content
    </div>

  </div>
</div>



</>

)


}