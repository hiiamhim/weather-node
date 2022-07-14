console.log("client side js file is ladded")

//fetch api comes from browser


const weatherForm=document.querySelector("form")
const searchelm=document.querySelector("input")
const mesg1=document.getElementById("mesg-1")
const mesg2=document.getElementById("mesg-2")

weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const location=searchelm.value
    fetch("https://api.weatherapi.com/v1/current.json?key=758e4d992ed2412e91e154118221007&q="+location).then((response)=>{
       
  
     response.json().then((data)=>{
      
        if(data.error){
            mesg2.innerText=data.error.message
            console.log(data.error)
        }
        else{
            mesg1.innerText=data.current.temp_c
            
           

                }
     })    
})
   
})