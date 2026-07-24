const exprees=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const multer=require("multer")

const app=exprees()

app.use(cors())
app.use(exprees.json())
app.use("/uploads",exprees.static("uploads"))

const path = require("path")



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

// for image multer setup
let pic
const storage=multer.diskStorage({
destination: function(req,file,cb){
cb(null,"./uploads")
},
  filename: function (req, file, cb) {
    pic = Date.now() +file.originalname
    cb(null, file.fieldname + '-' +pic)
  }


})

const upload=multer({storage})

// saving product info
const productSchema=mongoose.Schema({
proname:String,
proprice:String,
prodetail:String,
propic:String,
addedon:String

})

const productModel=mongoose.model("product",productSchema)

app.post("/api/addproduct",
             upload.single("propic"),async(req,res)=>{

let pic

if(!req.file){
    pic="default.web"
}
else{
    pic=req.file.path
}


let newrecord= new productModel({
proname:req.body.proname,
proprice:req.body.proprice,
prodetail:req.body.prodetail,
propic:pic,
addedon: new Date()

})

let imgresult =await newrecord.save()
if(imgresult){
    res.send({statuscode:1})
}
else{
    res.send({statuscode:0})
}

})


// getting product
app.get("/api/getsavepro",async(req,res)=>{

    const savepro= await productModel.find()

    if(savepro){
        res.send({statuscode:1,allproduct:savepro})
  console.log(savepro)
  
    }
    else{
        res.send({statuscode:0})
    }


})


