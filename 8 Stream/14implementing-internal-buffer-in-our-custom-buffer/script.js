import fs from 'fs'
const fd=fs.openSync('number.txt','w')

const buff=Buffer.allocUnsafe(4)
console.time()
let totalBytesWrittenInBuffer=0;
let remainingStr='';

for(let i=0;i<=20;i++){
    let str=`${i}, `
    let byteWritten=buff.write(str,totalBytesWrittenInBuffer)
    totalBytesWrittenInBuffer=totalBytesWrittenInBuffer+byteWritten;
    if(totalBytesWrittenInBuffer===buff.byteLength){
        fs.writeSync(fd,buff)
        totalBytesWrittenInBuffer=0;
    }
}
console.timeEnd()