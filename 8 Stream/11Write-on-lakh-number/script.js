import fs from 'fs';

console.time()
// for(let i=0;i<5001;i++){
//     if(i===0){
//         fs.writeFile('lakh.txt',`,${i} `,(err)=>{
//          console.log(err)
//     })
//     }
//     else{
//        fs.appendFileSync('lakh.txt',`${i} ,`,(err)=>{
//          console.log(err)
//     })
//     if(i===5000){
//         console.timeEnd()
//     }  
//     }
   
// }

// for(let i=0;i<5001;i++){
//     if(i===0){
//         fs.writeFileSync('lakh.txt',`${i},`)
//     }else{
//         fs.appendFileSync('lakh.txt',`${i},`)
//     }
// }
// console.timeEnd()


const writestream=fs.createWriteStream('lakh.txt')

for(let i=0;i<5001;i++){
writestream.write(`${i},`)
if(i===5000){
    writestream.end()
}
}


writestream.on('finish',()=>{
    console.timeEnd()
})