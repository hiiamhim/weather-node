const request=require("request")

// const url='http://api.weatherstack.com/current?access_key=35c79c01c2fdf32d3a8cca9cdc2e7e07&query=New%20York&units=f'
//     request({url,json:true},(error,{body})=>{
//         if(error){
//             console.log("unable to connect with weather server")
//         }
//         else if(body.error){
//             console.log("unable to find the location")
//         }

//         else{
//             console.log(body.current.temperature)
//             console.log(body.current.feelslike)

//         }
       
//     })


    const weather=(address,callback)=>{
        const url='https://api.weatherapi.com/v1/current.json?key=758e4d992ed2412e91e154118221007&q='+address
        request({url:url,json:true},(error,response)=>{
        if(error){
            callback(error,"unable to connect to the newtwork")
        }

        else if(response.body.error){
            console.log("Hi")
            console.log(address)
            console.log(response.body)
            callback(response.body,"unable to find the location")
        }

        

        else{
            // console.log(response)
            callback(undefined,{
                temp:response.body.current.temp_c,
                feels:response.body.current.condition.text
            })
        }
        }
        )

    }

module.exports=weather