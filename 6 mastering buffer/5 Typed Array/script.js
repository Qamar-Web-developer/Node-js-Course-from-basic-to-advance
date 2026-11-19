//########### using unit 
// const arraybuff=new ArrayBuffer(6)
// const view=new Uint16Array(arraybuff)
// console.log(view)
// view[0]=62
// view[1]=8
// view[2]=5

// const a=new ArrayBuffer(6)
// const view2=new DataView(a)
// console.log(view2)
// console.log("hii")

setInterval(()=>{
const a=new Uint8Array(1.99*1024*1024*1024).fill(5)
console.log(a)
},1000)

