import fs from 'fs'

// file descriptor
// fs.open('text.txt',(err,fd)=>{
//     console.log(fd)
// })


//***Reading files with file descriptors */
const readBuffer=Buffer.alloc(10)
const fd=fs.openSync('text.txt')

fs.read(fd,{
    buffer:readBuffer,
    length:5,
    position:2,
    offset:2,
},(err,byte,buffer)=>{
    console.log(err)
    console.log(byte)
    console.log(buffer)
})