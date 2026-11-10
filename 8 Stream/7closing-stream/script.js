const fs=require('fs')
// const readStream=fs.createReadStream("D:\\Camera Roll\\MVI_2038.MOV")
const writeStream=fs.createWriteStream('stream.txt',{highWaterMark:4})


writeStream.on('open',(fd)=>{
    console.log('fd',fd)
})

writeStream.write('a')
writeStream.write('a')
writeStream.write('a')
writeStream.end('end')


writeStream.on('finish',()=>{
    console.log('finished')
})

