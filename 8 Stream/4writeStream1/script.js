const fs=require('fs')
const readStream=fs.createReadStream("D:\\Camera Roll\\MVI_2038.MOV")
const writeStream=fs.createWriteStream('stream.MOV')
// readStream.on('data',(chunk)=>{

//    //time 
//    //Memory 
//    //cpu

//   writeStream.write(chunk)
// })

// readStream.on('end',()=>{
//     console.timeEnd()
// })


console.log(writeStream)
console.log('hello')
