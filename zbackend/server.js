const exprees=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const multer=require("multer")
const fs= require("fs")

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

// deleting product

app.delete("/api/deleteproduct/:id",async(req,res)=>{

const dellresult=await productModel.deleteOne({_id:req.params.id})
console.log(dellresult)

if(dellresult.deletedCount===1){
    res.send({statuscode:1})
}

else{
    res.send({statuscode:0})
}

})


// update product
app.put("/api/proupdate/:id",upload.single("propic"),async(req,res)=>{

    if(!req.file){
pic=req.body.oldpic

 }

 else {

    pic = req.file.path;

    if (req.body.oldpic) {

        fs.unlink(req.body.oldpic, (error) => {

            if (error) {
                console.log("Image delete failed", error);
            }
            else {
                console.log("Old image deleted");
            }

        });

    }

}

const result = await productModel.updateOne({_id:req.params.id},{

    $set:{
        proname:req.body.proname,
        proprice:req.body.proprice,
        prodetail:req.body.prodetail,
        propic:pic
    }

})

if(result.modifiedCount==1){
res.send({statuscode:1})

}

else{
    res.send({statuscode:0})
}
  
})


// saving category info

const catSchema=mongoose.Schema({
catname:String,
catpic:String,


})

const catModel=mongoose.model("category",catSchema)

app.post("/api/addcategory",upload.single("catpic"),async(req,res)=>{


    if(!req.file){
    pic="default.web"
}
else{
    pic=req.file.path
}

let newrecord= new catModel({
catname:req.body.catname,
catpic:pic,


})

let catimg= await newrecord.save()
if(catimg){
    res.send({statuscode:1})
    console.log(req.body)
}
else{
    res.send({statuscode:0})
}

})


// getting caategory

app.get("/api/getsavecat",async(req,res)=>{

const getcat= await catModel.find()

if(getcat){
    res.send({statuscode:1,allcategory:getcat})
    console.log(getcat)
}
else{
    res.send({statuscode:0})
}


})