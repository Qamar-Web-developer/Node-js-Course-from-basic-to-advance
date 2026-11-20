// const buff=new Buffer(5)
// const buff=Buffer.alloc(5)
// console.log(buff.bytelength)

// ###################### reading photos data #################
// import fs from "fs";
// const data = fs.createReadStream("Qamar.jpg",{ highWaterMark: 1024});  // no encoding given
// // console.log(data)
//  const writeStream=fs.createWriteStream('Abbas.jpg')
// data.on('data',(chunk)=>{
//     console.log(chunk)
//     writeStream.write(chunk)
// })  

// ############ Encoding ###########

// const b = Buffer.from([72 ,101 ,108 ,108, 111]);
// console.log(b)
// console.log( b.toString())      // "Hello" (utf8, default)
// console.log(b.toString("hex"))      // "48656c6c6f"
// console.log(b.toString("base64"))   // "SGVsbG8="


//###############################  checking bytelength #################

// "a".length;                        // 1
// console.log(Buffer.byteLength("a"));            // 1
// Buffer.byteLength("é");            // 2
// console.log(Buffer.byteLength("😀"))           // 4

//############### Handling Backpressure ###################

import fs, { ReadStream } from "fs";
const data = fs.createReadStream("vid.mp4",{ highWaterMark: 1024});  // no encoding given
// console.log(data)
 const writeStream=fs.createWriteStream('vid2.mp4')
// data.on('data',(chunk)=>{
//     const canContinue=writeStream.write(chunk)
//     if(!canContinue){
//         data.pause()
//     }
// }) 
// writeStream.on('drain',()=>{
//     data.resume()
// })
data.pipe(writeStream)



