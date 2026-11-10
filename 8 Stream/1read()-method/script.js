const Fs=require('fs')

const readStream=Fs.createReadStream('text.txt')

readStream.on('readable',()=>{
console.log(readStream.readableLength)
    console.log(readStream.read(3))
    console.log(readStream.readableLength)
})
