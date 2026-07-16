const exprees=require("express")
const cors=require("cors")
const mongoose=require("mongoose")


const app=exprees()

app.use(cors())
app.use(exprees.json())

app.listen(9000,()=>{
    console.log("server running")
})

mongoose.connect("mongodb://127.0.0.1:27017/Doaba-steel-app")

.then(()=>{
    console.log("connected to db")
})

.catch(()=>{
    console.log("not connected to db")
})