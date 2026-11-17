
// ################# expriment about file handle and file opening etc ##################
// import fs from 'fs/promises'

// const filehandle=await fs.open('text.txt','r+')
// console.log(filehandle.stat())
// console.log('hi')



//######################### fetching data from backend #######################

async function func(){
const response=await fetch("http://192.168.43.152:4000")
// console.log(response)
// const data= await response.text()

// console.log(data)
// document.write(data)
const decoder=new TextDecoder()
for await (const chunk of response.body) {
    console.log(chunk);

    const text = decoder.decode(chunk);
    document.write(text)
    // console.log(text);

    // If the chunk contains a complete JSON value:
    // console.log(JSON.parse(text));
}

}
func()
