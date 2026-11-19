import fs from "fs/promises";
import { buffer } from "stream/consumers";

const uint8Array = new Uint8Array(5);
// const a = uint8Array.buffer;

uint8Array[0] = 0x51;
uint8Array[1] = 0x61;
uint8Array[2] = 0x6D;
uint8Array[3] = 0x61;
uint8Array[4] = 0x72;


const decoder = new TextDecoder("utf-8");
console.log(decoder.decode(uint8Array));
fs.writeFile("buffer-text.txt",decoder.decode(uint8Array))

// const view = new DataView(uint8Array.buffer);

// console.log(view);
// fs.writeFile("buffer-text.mp4", view);
