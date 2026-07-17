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

const signupSchema=mongoose.Schema({
name:String,
email:String,
pass:String,
cfpass:String

})

const signupModel=mongoose.model("signup",signupSchema)

app.post("/api/signup",async(req,res)=>{

const saveuser=await signupModel({
name:req.body.name,
email:req.body.email,
pass:req.body.pass,
cfpass:req.body.cfpass,

})

const sv= await saveuser.save()

if(sv){
res.send({statuscode:1})
console.log(sv)
}

else{
    res.send({statuscode:0})
}


})