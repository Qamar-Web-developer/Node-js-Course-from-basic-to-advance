const fs=require('fs')

const readable=fs.createReadStream("D:\\Camera Roll\\MVI_2038.MOV")
const writeable=fs.createWriteStream('my.MOV',{highWaterMark:1*1024*1024})

console.time()
// readable.on('data',(chunk)=>{
//     const isEmpty=writeable.write(chunk)
//     if(!isEmpty){
//         readable.pause()
//     }
// })

// writeable.on('drain',()=>{
//     readable.resume()
// })

readable.pipe(writeable)


setTimeout(()=>{
    readable.unpipe(writeable)
},2000)

readable.on('end',()=>{
    console.timeEnd()
})