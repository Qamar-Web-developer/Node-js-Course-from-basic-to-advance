const Fs=require('fs')

const readStream=Fs.createReadStream("C:\\Users\\LG\\Desktop\\javascript programming files\\read()-method\\text.txt")
readStream.on('open',(fd)=>{
    console.log('File opend')
    console.log('File description',fd)
})

readStream.on('ready',()=>{
    console.log('File is ready to work')
})

readStream.on('data',(chunk)=>{
    console.log(chunk.toString())
})

readStream.on('end',()=>{
    console.log('File has been ended')
})

readStream.on('error',(err)=>{
    console.log(err.message)
})






