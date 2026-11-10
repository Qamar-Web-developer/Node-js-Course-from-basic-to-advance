console.time()
const fs=require('fs')
const readStream=fs.createReadStream("D:\\Camera Roll\\MVI_2038.MOV")
const writeStream=fs.createWriteStream('stream.MOV',{highWaterMark:4})
readStream.on('data',(chunk)=>{

   //time 
   //Memory 
   //cpu
    const writAble=writeStream.write(chunk)
    if(!writAble){
        readStream.pause()
    }
})

writeStream.on('drain',()=>{
    readStream.resume()
})

readStream.on('end',()=>{
    console.timeEnd()
})

// function Write1000A(){
//     let i=1;
// while(i<1000){
//     console.log(writeStream.writableLength)
//     const isEmpty=writeStream.write('a')
//     if(!isEmpty){
//         break;
//     }
//     else{
//         continue
//     }
//     console.log(isEmpty)
//     i++;
// }
// }

// Write1000A()
// writeStream.on('drain',()=>{
//     console.log(writeStream.writableLength)
//     Write1000A()
// })




