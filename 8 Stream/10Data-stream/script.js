const fs=require('fs')


const readStream=fs.createReadStream('file.txt')

// process.stdin.on('data',(chunk)=>{
//     console.log('enter Data',chunk.toString())
// })

// process.stdout.write('hello la zindagi')

process.stdin.pipe(readStream)