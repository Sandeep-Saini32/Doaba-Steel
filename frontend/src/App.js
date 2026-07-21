
import { useEffect, useState } from 'react';
import './App.css';
import { Routerr } from './components/routerr';
import { Usercontext } from './components/usercontext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Adminheader } from './components/adminheader';
import { Userheader } from './components/userheader';


function App() {
  
  const [role,setrole]=useState("")

  useEffect(()=>{

const savedrole=localStorage.getItem("role")
if(savedrole){
  setrole(savedrole)
}

  },[] )
  
  return (
<>

<Usercontext.Provider value={{role,setrole}}>
  {role==="admin"? <Adminheader/>: <Userheader/>}

<Routerr/>


</Usercontext.Provider>



</>

  

  );

}

export default App;
