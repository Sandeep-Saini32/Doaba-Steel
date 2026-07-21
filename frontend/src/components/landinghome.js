export const Landinghome=()=>{

 const name=localStorage.getItem("name")   

return(
<>
<h1>user home page</h1>

<h3>welocme{name}</h3>

</>

)


}