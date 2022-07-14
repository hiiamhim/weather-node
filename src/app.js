const express=require("express")
const path =require('path')
const hbs=require('hbs')
const app=express()
console.log(__dirname)
const weather =require("./utills/neccesary")
// console.log(__filename)
// console.log(path.join(__dirname,'../public'))


//define patsh for express config
const publicDirectory=path.join(__dirname,"../public")
const viewsPath= path.join(__dirname,"../template/views")
const partialPath=path.join(__dirname,"../template/partials")



//setup handlebars engin and views locations
//dynamic template/view engine
app.set("view engine",'hbs')
//when changing name from views to template
app.set("views",viewsPath)

hbs.registerPartials(partialPath)

//setup static directoray to serve
app.use(express.static(publicDirectory))

//setting hbs
app.get("",(req,res)=>{
    res.render('index',{
        title:"Weather app",
        name:"Himanshu"
    })
})


app.get("",(req,res)=>{
     res.send({
        name:'Himanshu',
        sex:'Male'
     })
})

app.get("/about",(req,res)=>{
   res.render("About",{
    title:'About me',
    name:'Himanshu'
   })
})

app.get("/help",(req,res)=>{
    res.render("help.hbs",{
        helpText:'This is some helpful text',
        title:"Help page title",
        name:"Himanshu"
    })
})
app.get("/weather",(req,res)=>{

  if(!req.query.address){
    return res.send({
        error:"Address is not passed yet"
    }) 

  }  
  

weather(req.query.address,(error,{temp,feels}={})=>{
  if(error){
    return res.send({
        error:"address cannnot be found"
    }) 
  }
  else if(req.query.address=error){
    res.send({
        error:"Location cannot be found"
    })  
  }
  
  

  else{
    res.send({
        temperature:temp,
        feelslike:feels,
        address:req.query.address
    })
  }


   })

})


app.get("/products",(req,res)=>{

    if(!req.query.search){
    return res.send({
        error:"You must provie some search term"
    })
    }
    
    console.log(req.query.search)
    res.send({
          products: []
    })
})

//app.com
//app.comhelp
//app.com/about

app.get("/help/*",(req,res)=>{
    res.send('help article not found')
})


//404   error handling
app.get("*",(req,res)=>{
    res.send("error 404  page not found")
})


app.listen(3000,()=>{
    console.log("Server is up on port 3000")
})

