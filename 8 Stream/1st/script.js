import fs from "fs";

const radStream=fs.createReadStream('image.JPG')



radStream.on('data',(chunk)=>{
    console.log(chunk)
    fs.appendFileSync('image2.JPG',chunk)
})

