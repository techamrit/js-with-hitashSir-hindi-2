let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate);

// let myCreatedDate = new Date(2024,11,28)
// let myCreatedDate = new Date(2024, 0, 28,5,3)
let myCreatedDate = new Date("2024-11-28")
// console.log(myCreatedDate.toLocaleString);

let myTimeStmp = Date.now()
// console.log(myTimeStmp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate.getDate());

newDate.toLocaleDateString('default',{
    weekday:"long"
})
console.log(newDate.getDay())

