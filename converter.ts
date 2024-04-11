#! /usr/bin/env node
import inquirer from "inquirer"

let conversion : any = {
    "PKR" : {
        "USD" : 0.00444444444,
        "GBP" : 0.0037,
        "PKR" : 1
    },

    "GBP" : {
        "USD" : 1.21,
        "PKR": 271.79,
        "GBP" : 1
    },

    "USD" : {
        "PKR" : 225.50,
        "GBP" : 0.83,
        "USD" : 1
    }
}

let answer : {
    From : "PKR" | "GBP" | "USD" ,
    to : string,
    amount : number
} = await inquirer.prompt([{

    name : "From",
    type : "list",
    message : "Select your currency",
    choices : ["PKR", "GDB", "USD"]
},

{name : "to",
    type : "list",
    message : "Select your conversion currency",
    choices : ["PKR", "GDB", "USD"]

},

{ name : "amount",
type : "number",
message : "Enter your conversion amount:"
}
])

//deestructure:
const {From , to , amount} = answer;

if (From && to && amount) {
let result = conversion [From][to] * amount;
console.log(`Your conversion from ${From} to ${to} is ${result}`)
}

else{
    console.log("Invalid Inputs")
}











































