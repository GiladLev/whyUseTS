import { writePerson } from "./utils";

console.log("types");

// ---boolean , number, string

// let flag = true;
let num = 11;
let str = "hello world";
let s= num + str; 

console.log(s);


// ---- array

let fruits = ['melon', 'gray', "1"];

fruits.forEach(fruit =>{
    console.log(fruit.length); 
})


// ---object
let person ={firstName: "jim", lastName: "lev", age: 22}

writePerson(person)


export{}