import fs from 'fs/promises'

const fileHandle=await fs.open('text.txt','w+')

const buff=await fileHandle.read({buffer:Buffer.alloc(10)})
const read= await fileHandle.write(Buffer.from('hii how are you where are you from i am from falana adnd fistana'))
console.log(read)

console.log('hi')
