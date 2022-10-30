import { writePerson } from "./utils";

console.log("types");

// ---boolean , number, string

let flag = true;
let num = 11;
let str = "hello world";
let s= flag + num + str; //output 12hello world => ignore flag

console.log(s);

// ---- array

let fruits = ['melon', 'gray', 1];

fruits.forEach(fruit =>{
    console.log(fruit.length); // problem when run 1.length => undifend
})

// ---object
let person ={firstName: "jim", lastName: "lev", age: "22"}

writePerson(person)// now show problem only in run