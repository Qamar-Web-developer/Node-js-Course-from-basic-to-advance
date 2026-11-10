async function func(){const response = await fetch("http://192.168.43.152:4000");
//     for await (const chunk of response.body){
//     console.log(chunk)
// }
console.log(response.json)
}
func()




