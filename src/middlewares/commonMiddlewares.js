

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     //counter
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
const mid1 = function (req, res, next) {
   

    let value = req.headers.isfreeappuser
    if (value !== undefined) {
        next()
    }
    else { res.send("header is not persent") }
}


module.exports.mid1 = mid1
