# Type alias and interface in typeScript

## Introduction

TypeScript gives 2 important ways to makes custom types: type Alias and interface. Both help us (developers) to make  the structure of data and make code easier to understand. however, they have some differences.

## What is a Type Alias?

A Type Alias helps us to create a custom name for any type using the 'type' keyword. tt support primitive types, objects, unions, intersections, and tuples.

type Student ={
    name: string;
    age: number;
};

type Status = "hard-working" | "lazy";


## what Is an Interface?

an Interface make the structure of an object using the 'interface' keyword. It is commonly used to describe objects and supports extension and declaration merging.

interface Student {
    name: string;
    departmen: string;
    age: number;
}

interface GraduateStudent extends Student {
    subject: string;
}


## The main differences between them :

1.Declaration: Type Alias use 'type' while Interfaces use 'interface'

2.primitive Types: 'types can define primitive types, but 'interfaces' cannot directly do this.

3.union Types: Type Alias support union types using the '|' operator.

4.Extension: interfaces use 'extends'   while Type Aliases commonly use intersection ('&') to combine types.

5.merging: Interfaces support declaration merging but 'type' can not be redeclared.


## Conclusion

Both 'type'  and 'interfaces' are important in typeScript. They have some sevaral features, but each has its own advantages. Understanding their differences helps developers can write cleaner, more maintainable and type-safe code.mainly typscript provides us type safty



