import { readFile } from 'fs'
import fs from 'fs/promises'

// const promis=new Promise((resolve,reject)=>{
// const success=true;
// if(success){
//     resolve('Successfully Completed')
// }
// else{
//     reject('Rejected')
// }
// })

// console.log(promis)
// promis.then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
// })
// console.log('hii')


// #############################   promises and async await in node js ###################

// const a=fs.readFile('text.txt').then((data)=>{
//     console.log(data.toString())
// }).catch((e)=>{
//     console.log(e)
// })

// setTimeout(()=>{
// console.log(a)
// },500)

// console.log('hii')


// ############################# Async await function in node js ################


// console.log('Hello')
// async  function readMyFile(){
     
   //   try{
   //      const data= await fs.readFile('text.txt','utf8')
   //        console.log(data)
   //   }catch(err){
   //      console.log(err)
   //   }
   
// }



// console.log('bye')

// readMyFile()


//############################## Looking for buffer in node js #########################

   
const buff=  Buffer.from('Hellow')
console.log(buff) 






 