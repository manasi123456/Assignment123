let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//1
let getdistrictId = async function (req, res) {
    try {
        let Id = req.query.district_Id
        let date = req.query.date
        console.log(`query params are: ${Id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${Id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//2.1
let getweatherByAppId = async function (req, res) {
    try{
        let Id = req.query.appid
        let cityName = req.query.q
        let options={

            method:"get",
            url:  `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        let temp = data.main.temp
        res.status(200).send({ msg: {cityName:data.name,temperature:temp}, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//2.2
let getWeatherByCity = async function (req, res) {
    try{
        let Id = req.query.byAppId
        let cities=req.body.city
        let newArr=[]
    
        for(i=0;i<cities.length;i++){
            let obj={city:cities[i]}
            let options=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${Id}`)
            console.log(options.data.main.temp)
            obj.temp=options.data.main.temp
            newArr.push(obj)
    
        }
        let sorted=newArr.sort(function (a,b){return a.temp-b.temp})
        console.log(sorted)
        res.status(200).send({status:true,data:sorted})
    
     }
    
    
    catch (err) {
                console.log(err)
                res.status(500).send({ msg: err.message })
            }
    
}
//3.1
let getMeme = async function (req, res) {
    try{
       
        let options={

            method:"get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result= await axios(options)
        console.log(result)
        let data = result.data
        res.status(200).send({ msg:data, status: true })

    }
    
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    
}
//3.2
let createMeme = async function (req, res) {
    try{
       let text0 = req.query.text0
       let text1 = req.query.text1
       let username = req.query.username
       let password = req.query.password
       let template_id = req.query.template_id

       let options = {
           method : 'post',
           url : `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
       }
       let result= await axios(options)
       console.log(result)
       let data = result.data
       res.status(200).send({ msg:data, status: true })

    }
   
      catch (err) {
           console.log(err)
           res.status(500).send({ msg: err.message })
       }
   
}
    



let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getdistrictId = getdistrictId 
module.exports.getweatherByAppId  = getweatherByAppId
module.exports.getWeatherByCity = getWeatherByCity
module.exports.getMeme = getMeme 
module.exports.createMeme = createMeme