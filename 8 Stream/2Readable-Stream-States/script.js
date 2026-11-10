import fs from "fs";


const readStream = fs.createReadStream('file.txt', 'utf-8')

// console.log(readStream.readableFlowing)
// console.log(readStream.readableEnded)
// console.log(readStream.isPaused())
readStream.on('data', (chunk) => {
    // readStream.pause()
    console.log(chunk)
    // console.log(readStream.readableFlowing)
    // console.log(readStream.readableEnded)
    // console.log(readStream.isPaused())
})


readStream.on('end', (chunk) => {
    // readStream.pause()
    console.log(chunk)
    console.log(readStream.readableFlowing)
    console.log(readStream.readableEnded)
    console.log(readStream.isPaused())
})

