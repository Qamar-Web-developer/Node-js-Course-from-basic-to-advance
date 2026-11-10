import fs from 'fs'
import { CLIENT_RENEG_LIMIT } from 'tls'
console.time()


// fs.writeFileSync(fd,'my name is Qamar Abbas ')

// fs.write(fd,'Hi ala zindagi',(err,byteWritten,str)=>{
//     console.log(err)
//     console.log(byteWritten)
//     console.log(str)
// })

//################ Writing file with Stream #####################



const writestream=fs.createWriteStream('lakh.txt')
// time 273.737ms
for(let i=0;i<100001;i++){
writestream.write(`${i},`)
if(i===100000){
    writestream.end()
}
}


writestream.on('finish',()=>{
    console.timeEnd()
})


//############ Writing file by once opening file ########################
// const fd=fs.openSync('txt.txt','w')
// for(let i=0;i<100001;i++){
//     //time  390.887ms
//    fs.writeSync(fd,`${i},`)
// }

// console.timeEnd()



//################# Writing file without once opening file ################

 //time   22.217s
// for(let i=0;i<5001;i++){
//     if(i===0){
//         fs.writeFileSync('lakh.txt',`${i},`)
//     }else{
//         fs.appendFileSync('lakh.txt',`${i},`)
//     }
// }
// console.timeEnd()
