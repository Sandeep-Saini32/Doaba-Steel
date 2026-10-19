import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"

export const Shopdetail=()=>{

//  for product detail:   

const navigate=useNavigate()

const [shopname,setshopname]=useState("")
const [shopprice,setshopprice]=useState("")
const [shopsize,setshopsize]=useState("")
const [shopdetail,setshopdetail]=useState("")
const [shoppic,setshoppic]=useState("")
const[shopcat,setshopcat]=useState("")
const [shopqunt,setshopqunt]=useState(1)



    
// const[userid,setuserid]=useState("")

    const [params]=useSearchParams()

    const id=params.get("id")


    useEffect(()=>{
    saveproget()
    // getid()
},[id])


// const getid=()=>{
//     setuserid(localStorage.getItem("userid"))
// }


const saveproget =async()=>{

const saveprodata=await fetch(`http://localhost:9000/api/getproductdetail/${id}`,{
method:"get"

})


if(saveprodata){

    const spro= await saveprodata.json()
if(spro.statuscode===1){
    alert("pro data fetched")
setshopname(spro.alldata.proname)
setshopprice(spro.alldata.proprice)
setshopsize(spro.alldata.prosize)
setshopdetail(spro.alldata.prodetail)
setshoppic(spro.alldata.propic)
setshopcat(spro.alldata.procategory)


}


else{
    alert("pro data not fetched")
}


}

}



// for saving these deatils for  cart page

const addcart=async()=>{

const savecartdata={shoppic,shopname,shopprice,shopqunt}

const cartresult= await fetch("http://localhost:9000/api/savecartinfo",{
method:"post",
body:JSON.stringify(savecartdata),
headers:{
  "content-type":"application/json;charset=utf-8"
}

})

if(cartresult.ok){
const  cr= await cartresult.json()
if(cr.statuscode===1){
    alert("cart data saved")
}

else{
    alert("cart data not saved")
}

}

else{
    alert("cart save error")
}


}





return(
<>

<section className="detail-sec">

<div className="container">
    <div className="row">

<div className="col-md-6 col-12">
  <img src={`http://localhost:9000/${shoppic}`}

   className="detail-img">
    
   </img>

</div>


<div className="col-md-6 col-12 detail-info">

 <div>
     <button className="red-seller">Best Seller</button>

     <h1>{shopname}</h1>

<h2><i class="fa-solid fa-indian-rupee-sign"></i>{Number(shopprice).toLocaleString("en-IN")}</h2>

<div className="detail-message">
    <button>Enquire Now<i class="fa-solid fa-message"></i></button>
</div>


<p className="detail-p">
    {shopdetail}
    {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi tenetur nobis est reiciendis facere minus nihil incidunt fuga quos aliquid alias eaque modi placeat ab quod sequi, quis hic nulla. */}
    </p>

<div className="detail-icon">
    <p><i class="fa-solid fa-shield"></i> Strong & Durable</p>
    <p><i class="fa-solid fa-screwdriver-wrench"></i> Custom Design Available</p>
    <p><i class="fa-solid fa-cloud"></i> Weather Resistant</p>
    <p><i class="fa-solid fa-house"></i> Suitable for Home & Commercial</p>
    <p><i class="fa-solid fa-star"></i> Premium Finish</p>
</div>


<div className="counting-stock">
<p>
Category :<span className="detail-cat-name">{shopcat}</span><br/>
Size : {shopsize}<br/>
Availability :<span className="detail-stock">In Stock</span>
</p>

<button className="qunt">Quantity :<span className="qunt1">{shopqunt}</span></button>
</div>

<div className="detail-buy">
<Link to={`/cart/?id=${id}`}>

<button onClick={addcart}>Add To Cart <i class="fa-solid fa-cart-shopping"></i></button><br/>
</Link>
<button>Buy Now <i class="fa-solid fa-bag-shopping"></i></button><br/>
<button>Add To Wishlist<i class="fa-solid fa-heart"></i></button>
</div>

</div>




</div>


    </div>



</div>



</section>


</>


)

}