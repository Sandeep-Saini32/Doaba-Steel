import { Route, Routes } from "react-router-dom"
import { Landinghome } from "./landinghome"
import { Adminhome } from "./adminhome"
import { Signup } from "./signup"
import { Login } from "./login"

export const Routerr=()=>{


return(
<>
<Routes>
<Route path="/" element={<Landinghome/>} />
<Route path="adminhome" element={<Adminhome/>} />
<Route path="signup" element={<Signup/>} />
<Route path="login" element={<Login/>} />

</Routes>


</>


)


}