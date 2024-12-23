const name="amrit pal"
const reopcount= " 23"

//  console.log(name + reopcount + " value")
//  console.log(`hello my name is ${name} and my reopcount is ${reopcount} `)

const gamename = new String('amrit-pal')  
console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(1))

const newString = gamename.substring(0, 2)
console.log(newString)

const anotherString = gamename.slice(-8, 3)
console.log(anotherString)

const newStringOne = "   amrit   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://amrit.com/amrit%20pal"
console.log(url.replace('%20', '-'))
console.log(url.includes('manish'))

console.log(gamename.split('-'));
