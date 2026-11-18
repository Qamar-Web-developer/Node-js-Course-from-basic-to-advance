let a= new ArrayBuffer(4)
let dataView=new DataView(a)

dataView.setInt8(0,64665)
dataView.setInt8(3,255)


console.log(dataView.getInt8(0))
//it will treat as signed value
console.log(dataView.getInt8(3)) //-1

//becuase it treat as unsinged value
console.log(dataView.getUint8(3))//255
