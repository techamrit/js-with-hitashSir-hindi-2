// primitive datatype

//7 type  string, number, boolean, null, undefined, bigint, symbool.

// non-primitive datatype.(refrence)

// array, object, function


// ++++++++++++++++++++++++++++++++++

//  stack (primitive ), Heap (non-primitive )

let myname = " amrit "


let anothername = myname
console.log(anothername)


let userone = {
    name:"amrit",
    age : 23,
    class: 8
}
console.log(userone)
let userTwo = userone;
userTwo.name = "manish"
console.log(userone.name)
console.log(userTwo.name)