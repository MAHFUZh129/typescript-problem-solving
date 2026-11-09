## Type Narrowing in TypeScript (typeof, instanceof, and the in operator)

# Introduction

Type Narrowing is an important feature of typeScript that helps developers to work safely with variables having multiple possible types. It allow typeScript to identify a more specific type within a conditional block. As a resul, a developers can write clean and safe code


# What is Type Narrowing?

Type Narrowing means reducing the possible types of a variable based on certain conditions. typeScript uses these checks to understand which type is being used at a particular place in the code.


# 1. typeof Narrowing

 'typeof' operator checks the type of primitive values.For example, strings, numbers, and booleans.

const showValue=(value: string | number): void =>{
    if (typeof value === "string") {

        console.log(value.toUpperCase());
    } 
    else {

        console.log(value * 2);
    }
}

here, typeScript identifies the value as a string inside the first block and a number inside the second block.

# 2. 'instanceof' Narrowing

 'instanceof' operator checks whether an object belongs to a particular class .

 class Employee {
    name:string,
    baseSalary:number
 }

 class Manager {
    name:string,
     designation: string,
     department: string,
 }

const manager = new Manager();
const employee = new Employee();

console.log(manager instanceof Manager); // true
console.log(employee instanceof Employee); // true



# 3. in Operator Narrowing

 'in' operator checks whether a specific property exists in an object. it is useful when working with union types of different object structure.

type Admin = {
    name: string;
    role: string;
};

type User = {
    name: string;
    email: string;
};

const showInfo=(person: Admin | User) =>{


    if ("role" in person) {

        console.log(person.role);
    }
     else {

        console.log(person.email);
    }
}

here, typeScript identifies the object as Admin type if it contains the role property; otherwise, it identifies it as User type



# Conclusion

Type Narrowing makes TypeScript applications more reliable by reducing type-related erors.'typeof', 'instanceof', and 'in' operators provide a good ways to check different types of values and objects. understanding these techniques helps developers to write more maintainable and typesafet applications.