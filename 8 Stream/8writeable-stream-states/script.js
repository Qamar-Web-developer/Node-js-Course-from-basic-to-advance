const fs=require('fs')

const writableStream=fs.createWriteStream('text.txt',{heighWaterMark:4})
corked()
writableStream.write('a')
writableStream.write('a')
writableStream.write('a')
writableStream.write('a')


console.log(writableStream.writable)