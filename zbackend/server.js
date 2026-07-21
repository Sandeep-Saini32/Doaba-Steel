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

// for signup

const signupSchema=mongoose.Schema({
name:String,
email:String,
pass:String,
cfpass:String,
role:{
    type:String,
    default:"user"
}

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

// for login

app.post("/api/loginpage",async(req,res)=>{

const showuser=await signupModel.findOne({email:req.body.loginem})


if(!showuser){
    res.send({
        statuscode:0
    })
}

if(showuser.pass===req.body.loginpass){

res.send({statuscode:1,

    id:showuser._id,
    name:showuser.name,
    email:showuser.email,
    pass:showuser.pass,
    role:showuser.role


})


}

else{
    res.send({statuscode:0})
}


})