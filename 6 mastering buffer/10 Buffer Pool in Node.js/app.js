//condition to use allocunsafe
//BufferSize<buffer.poolsize/2
//BufferSize>>>1
import { Buffer, constants } from "buffer";
// console.log(global.Buffer)
// console.log(Buffer)

// Buffer.poolSize = 10000;

// Condition for allocUnsafe to use Buffer Pool
// BufferSize < Buffer.poolSize >>> 1



// const a = Buffer.alloc(4);
// const z = Buffer.alloc(4);
// console.log(a)
const b = Buffer.allocUnsafe(4);
const c = Buffer.allocUnsafe(4);

console.log(b)
console.log(c)
// const d= Buffer.from('ABC')
// b[0]=81
// c[0]=81
// const a = Buffer.allocUnsafe(4)
// const b = Buffer.allocUnsafeSlow(4)

// console.log(a.buffer);
// console.log(b.buffer);

// const d = Buffer.from('a'.repeat(constants.MAX_STRING_LENGTH));
// const string = d.toString()

//it also use Allocunsafe
// const joinBuffer = Buffer.concat([a, z]);

// b[2] = 97;
// c[0] = 101;

// console.log(a.byteLength);
// console.log(b.byteLength);
// console.log("***************");
// console.log(a.buffer.byteLength);
// console.log(b.buffer.byteLength);
// console.log(b.buffer === c.buffer);
console.log("End");
