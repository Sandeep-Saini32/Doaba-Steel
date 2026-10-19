import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export const Cart=()=>{

// const [quantity,setquantity]=useState(1)
const [carttotal,setcartotal]=useState(0)

const [params]=useSearchParams()
const id=params.get("id")



const[savecart,setsavecart]=useState([])


// const[cartname,setcartname]=useState("")
// const[cartprice,setcartprice]=useState("")
// const [cartpic, setcartpic] = useState("")



 useEffect(()=>{
   cartget()
 },[])


const cartget=async()=>{

const cartdata=await fetch(`http://localhost:9000/api/getcart/${id}`,{
method: "get"

})


if(cartdata){

  const cartanswer=await cartdata.json()
  console.log(cartanswer)

  if(cartanswer.statuscode===1){
alert("cart data fetched")

     setsavecart(cartanswer.allcartdata)   

}

else{
  alert("cart data not fetched")
}

}


else{
  alert("cart error")
}



}

// FOR QYUANTITY:

const changequnt=async(index,change)=>{

const newcartdata=[...savecart];
const newqunt=newcartdata[index].shopqunt+change;


if(newqunt<1)return{

}

 newcartdata[index].shopqunt = newqunt;

    setsavecart(newcartdata);

await fetch(`http://localhost:9000/api/updatecart/${newcartdata[index]._id}`,{
method:"put",
headers:{
  "content-type":"application/json"
},
body:JSON.stringify({shopqunt:newqunt})


})    

}

useEffect(()=>{

  var subtotal=0;

  for(var i=0; i<savecart.length; i++){
subtotal=subtotal +(savecart[i].shopprice *savecart[i].shopqunt)

  }
 setcartotal(subtotal)
 
 sessionStorage.setItem("carttotal",JSON.stringify(subtotal)) 
},[savecart])



// DELETING CART PRODUCTS:

const delcart=async(id)=>{

const delresult=await fetch(`http://localhost:9000/api/delcart/${id}`,{
method:"delete",

})

if(delresult){
const delres=await delresult.json()

if(delres.statuscode===1){
alert("product deleted")

const updatecart=savecart.filter(item=>item._id !==id)
setsavecart(updatecart)

}

else{
  alert("product not deleted")
}


}
else{
  alert("deleted error")
}

}


// FOR CLEAR FULL CART:

const clearcart=async()=>{

const clearcart= await fetch("http://localhost:9000/api/clearcart/",{
method:"delete"


})

if(clearcart){
const result=await clearcart.json()

if(result.statuscode===1){
  alert("cart cleared")
  setsavecart([])

}
else{
  alert("cart not cleared")
}

}

else{
  alert("cleared error")
}



}





return(
<>
<section className="page-banner">
<div className="container">
  <div className="row page-row">

   <div className="col-12 page-content">
    
    <h1>Shopping Cart</h1>
    <p><Link to={"/"}><span className="home-text">Home</span></Link>
      <i className="fa-solid fa-greater-than "></i> 
      Shopping Cart</p>
    
    </div> 

  </div>

</div>


</section>



{/* CART ROW STARTED : */}

<section className="cart-list">

<div className="container">

<div className="row">


{/* LEFT SIDE CART TABLE: */}

<div className="col-md-8">


<div className="cartboxses">
  
 {/* <div className="table-responsive"> */}
<table className="cart-table">

<thead>
   <tr>
  <th className="cartpro-head">Product</th>
  <th className="cartpp-head">Price</th>
  <th className="cartq-head">Quantity</th>
  <th className="carttot-head">Total</th>
</tr>
</thead>


<tbody>


{
  savecart.map((item,index)=>(

<tr key={index}>

    <td>

        <div className="cart-namebox">

            <img
               src={`http://localhost:9000/${item.shoppic}`}
                className="cartimg"
                // alt="Gate design"
            />

            <div className="cart-name">

                <h6>
                  {item.shopname}

                </h6>

                <span className="mobile-price">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                  {item.shopprice}
                </span>

                <button className="cartremo-btn" onClick={()=>delcart(item._id)}>
                    Remove
                    <i className="fa-solid fa-trash"></i>
                </button>

            </div>

        </div>

    </td>


{/* ABOVE 992px:  */}

    <td className="cart-price">
        <i class="fa-solid fa-indian-rupee-sign"></i>
       {item.shopprice}
    </td>


  
  
    <td>

        <div className="cartqunt-btn">

            <button className="subbtn" onClick={()=>changequnt(index, -1)}>-</button>

            <span className="quntnum">{item.shopqunt}</span>

            <button className="addbtn" onClick={()=>changequnt(index,1)}>+</button>

        </div>

    </td>


    <td className="cart-tot">
         <i class="fa-solid fa-indian-rupee-sign"></i>
        {/* 1,00,000 */}
         {/* {(Number(item.shopprice) * Number(item.shopqunt)).toLocaleString("en-IN")} */}
        {Number(item.shopprice*item.shopqunt).toLocaleString("en-IN")}
    </td>

</tr>


  ))
}






</tbody>


</table>





{/* CART BUTTONS LEFT SIDE */}

<div className="cart-btns">

<Link to={"/shop"}>
<button className="cart-shopbtn">
  <i class="fa-solid fa-arrow-left-long"></i>
  Continue Shopping
  </button>

</Link>

<button className="cart-clearbtn" onClick={clearcart}>
  clear chart
  <i class="fa-solid fa-trash"></i>
  </button>

</div>

{/* </div> */}

</div>

</div>



{/* RIGHT SIDE ORDER SUMMARY: */}

<div className="col-md-4 right-side">

<div className="summ-box">
  <h2>Order Summary </h2>

<table className="summ-table">
<tbody>

<tr className="fsttr">
  <td className="fsttd">  Subtotal ({savecart.reduce((sum, item) => sum + Number(item.shopqunt), 0)} items)</td>

  <td className="fsttd2">
     <i class="fa-solid fa-indian-rupee-sign"></i>
     {carttotal.toLocaleString("en-IN")}
     </td>
</tr>


<tr className="tr-ship">
  <td className="td-ship">
    Shipping
  </td>


<td className="td-ship2"> 0 </td>

</tr>


<tr className="secdtr">
  <td><b>Total Amount</b></td>
  
  <td className="right-sumtot">
    <b>  <i class="fa-solid fa-indian-rupee-sign"></i>
 {carttotal.toLocaleString("en-IN")}
    </b>
    </td>
</tr>


</tbody>
</table>


{/* CHECKOUT */}
<div className="check-btn">
  <button>Proceed to Checkout</button>
</div>



<div className="logo-sect">
  <h5>We Accept</h5>

<div className="cart-logo">
  <img src="/images/cart-visa-logo.jpg"></img>
<img src="/images/cart-circle-logo.jpg"></img>
<img src="/images/upi-logo.jpg"></img>
<img src="/images/cart-codlogo.png"></img>

</div>

</div>


</div>



</div>





</div>


</div>



</section>






</>


)


}