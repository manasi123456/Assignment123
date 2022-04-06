let arr = [ "jan", "fab", "mar", "april","may","jun","jul","aug","sep","oct","nov",'dev']
 const chunk = require('chunk')
 let result = console.log(chunk(arr,4))


 let arr1 = [1,3,5,7,9,11,13,15,17,19]
 const _ = require('lodash')
 const result1 = console.log(_.tail(arr1))


 module.exports.result = result
 module.exports.result1 = result1
