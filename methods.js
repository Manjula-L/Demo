//Date format
const date=new Date();// Date inbuilt method for date
console.log(date.getFullYear());//getter method for date
const d=new Date();
console.log("date",d);
//setter method of date
d.setMilliseconds(600)// set or change millisecond value in date
d.setMonth(0);//sets or changes  the month-->0-jan,1-feb,2-mar......11-dec
console.log("Date set to millisec",d);
//Math functions
console.log(Math.random());//prints random number bertween 0 and 1
console.log(5*Math.random());//prints random number between 0 and 5
console.log(Math.round(4.6));//round off the approx value
console.log(Math.ceil(4.2))//rounded to greater nearer value
console.log(Math.floor(4.6))//rounded to smaller nearer value
console.log(Math.sign(-4))//returns 0 for 0, 1 for +ve and -1 for -ve
//JS Errors-->Exception Handling
try{
    console.log(element)//try block
}
catch(error){
    console.log("Error");//catch block handles error
}
finally
{
    console.log("Finally block executes always")
}
//Map-->Allows Duplicates
const fruits=new Map([
    ["apples",500],
    ["bananas",300],
    ["ORanges",250]
]);//creating objects
console.log("Objects created using map")
console.log(fruits)
//To add new element into the object
fruits.set("mangoes",400);
console.log(fruits);
console.log(fruits.get("bananas"));//to get the value
console.log(fruits.has("mangoes"));//checks the presence of the element-->returns true/false
console.log(fruits.delete("bananas"));//deletes the particluar element
console.log("after deletion",fruits);
//Set-->similar to Map-->but does not allows duplicates
const cars=new Set([1,5,1,9,8])
console.log(cars);
console.log("Object created using class and constructor")
//class and constructor
class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}
const mycar=new car("ford",2015);
const mycar1=new car("BMW",2020);
console.log(mycar.name,":",mycar.year);
console.log(mycar1.name,':',mycar1.year);