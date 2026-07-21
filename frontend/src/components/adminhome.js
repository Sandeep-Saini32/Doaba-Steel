export const Adminhome=()=>{

 const name=localStorage.getItem("name") 

return(
<>
<h1>admin home</h1>

<h3>welocme : {name}</h3>

</>


)


}