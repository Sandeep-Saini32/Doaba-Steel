import { Route, Routes } from "react-router-dom"
import { Landinghome } from "./landinghome"
import { Adminhome } from "./adminhome"

export const Routerr=()=>{


return(
<>
<Routes>
<Route path="/" element={<Landinghome/>} />
<Route path="adminhome" element={<Adminhome/>} />

</Routes>


</>


)


}