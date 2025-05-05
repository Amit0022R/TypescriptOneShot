// console.log("Ts is working");
// alert("Ts is working");


// let a = 25;
// a = "2"; 
// this will run in js file but error in ts file
// console.log(a);

// let a = <string> "AMiT Kumar";
// let a : string = "AMiT Kumar";
// let x : number = 25;
// let check : boolean = true;

// union variables
// let surname : string | number;
// surname="Kumar";
// surname = 565

// const func = (n:number,m:number) =>{
//     console.log(`The sum of ${n} and ${m} is ${n+m}`);
//     return String(n+m);
// }

// const func = (n:number,m:number) : number =>{
//     console.log(`The sum of ${n} and ${m} is ${n+m}`);
//     return String(n+m);
//     this will give caus func is explicitly returning a number but in the function we are returning a string
// }

// type Username = string | number;
// let a: Username = "Amit";
// let b: Username = 25;

// type UserName = ( n : number , m : number ) => number;

// const func : UserName = (n,m) => {
//     console.log(n,m);
//     return n+m;
// }

                // Array in ts

// const arr1 : number[] = [12,24,36,48];
// const arr2 : String[] = ["Amit","Kumar","Singh"];
// arr2[0] = "Anuj"
// const arr3 : (number | string)[] = [12,"Amit",24,"Kumar",36,"Singh"];
// const arr4 : Array<String> = [];
// const arr5 = new Array(12,24,36,48);
// const arr6 : Array<boolean> = new Array(20);
// const arr7 : Array< string | number> = [230,"hey"];

                // Object in ts

// const obj : {
//     height : number,
//     weight : number,
//     name : string,
//     isMarried : boolean,
// } = {
//     height : 5.6,
//     weight : 51,
//     name : "Amit",
//     isMarried : false
// }

// const obj = {
//     height : 5.6,
//     weight : 70,
// }

// type Obj = {
//     height : number,
//     weight : number,
//     name : string,
//     isMarried? : boolean,
// }
// with ? we can make the property optional jisko dalna hai wo hi dega jisko nhi deni wo mat do

// const obj1 : Obj = {
//     height : 5.6,
//     weight : 51,
//     name : "Amit",
//     isMarried : false
// }

interface Obj {
    height : number,
    weight : number,
    name : string,
    isMarried? : boolean,
}

type FuncType = (n:number, m:number) => void;
interface NewObj extends Obj {
    scholar : boolean,
    // this will inherit all the properties of Obj and add new property scholar
    func?: FuncType;
}


const gigi1 : NewObj = {
    height : 5.6,
    weight : 51,
    name : "Amit",
    scholar : true
}

const gigi2 : NewObj = {
    height : 5.6,
    weight : 51,
    name : "Amit",
    scholar : true,
    func : (n, m) => {
        console.log(n+m);
    }
}

const obj2 : Obj = {
    height : 5.6,
    weight : 51,
    name : "Anuj",
}



