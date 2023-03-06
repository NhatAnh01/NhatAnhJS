const express = require('express')
const app = express()
const port = 3000

//let a=10;
//console.log("Gia tri cua a la: ", a);
//let massage = ""
//let name = "Nhật Anh";
//massage =name
//console.log("Tên tôi là : ", massage);
//const = "Hằng số"

//let info = {"name":"Anh", "age":"24"}
//console.log(info)

let s= 0
let tuoi = 24
s= (tuoi+6)*2**3
console.log(s)
app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
})
