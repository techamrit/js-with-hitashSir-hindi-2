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
// console.log(loginUserMessage());



function calcartitem(...num1){
    return num1
}
// console.log(calcartitem(200,100,300,))

const user = {
    username:"amrit",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}     
// handleobject(user)

handleobject({username:"amit",
    price:399
    })
    const myNewArray = [200,400,100,322]

    function returnSeondvalue(getArray){
        return getArray[2]
    }
    console.log(returnSeondvalue(myNewArray))
    console.log(returnSeondvalue([100,200,300,400]))