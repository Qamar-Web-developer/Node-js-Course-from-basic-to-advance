import { Buffer } from 'node:buffer';
import fs from "fs/promises"
// const buff=Buffer.from(" hello every one My Name is Qamar Abbas !")
// console.log(buff)
// const read=await fs.readFile('text.txt')
// console.log(read)
// fs.writeFile('text.txt',buff)

const buff=Buffer.alloc(8)
buff.fill('Q')
console.log(buff.toString())