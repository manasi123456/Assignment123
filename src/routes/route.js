const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/movies', function(req, res) {
    let array = ["rand de basnasti", "the shining", "lord of the rings", "bartman begins"]
    console.log(req)
    console.log(req.params.abcd)
    res.send(array)
})


router.get('/user-profile/:IndexNumber', function(req, res) {
    
    req.params.IndexNumber
       let array = ["Matrix", "the shining", "lord of the rings", "bartman begins" , ]
       //  console.log(array[IndexNumber])
       if(req.params.IndexNumber<array.length){
           for(var i=0; i<req.params.IndexNumber;i++){
            }res.send(array[i]);
            console.log(array[i])
       }
        else{
            res.send("not valid")
        }
       
      
   })
    

   

   router.get('/films',function(req,res) {
    const a = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]

       res.send(a)
}) 

router.get('/user-profile/:IndexNumber', function(req, res) {
    
    req.params.IndexNumber
    //    let array = ["Matrix", "the shining", "lord of the rings", "bartman begins"]
       //  console.log(array[IndexNumber])
       const array = [ {
                'id': 1,
                'name': 'The Shining'
               }, {
                'id': 2,
                'name': 'Incendies'
               }, {
                'id': 3,
                'name': 'Rang de Basanti'
               }, {
                'id': 4,
                'name': 'Finding Nemo'
               }]
       if(req.params.IndexNumber<array.length){
           for(var i=0; i<req.params.IndexNumber;i++){
            }res.send(array[i]);
            console.log(array[i])
       }
        else{
            res.send("not valid")
        }
       
      
   })

   
router.get('/missingNumber', function(req, res){
    let array = [33,34,35,37,38,39]
    
    let n =array.length + 1;
    let Sum = n*(n+1)/2;

    let sum = 0
    for (let i = 0; i< array.length; i++){
        sum = sum + array[i];
}







// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });






module.exports = router;
})