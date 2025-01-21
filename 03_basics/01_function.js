function sayMyName(){
    console.log("a")
    console.log("m")
    console.log("r")
    console.log("i")
    console.log("t")
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }
function addTwoNumbers(num1, num2){
//    let result = num1 + num2;
return num1 + num2
}


const result = addTwoNumbers(3, 5)
// console.log("result:" , result);


function  loginUserMessage(username){
    return `${username}just logged in`  
}
// console.log(loginUserMessage("amrit"));










function  loginUserMessage(username = "amrit"){

    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`  
}
console.log(loginUserMessage());
