//if loop
let a=10;
let b=15
if(a>b){
    console.log(a," is greater");
}
else{
    console.log(b,' is greater');
}
// while
let i=1
console.log("While loop")
while(i<=3){
    console.log(i);
    i++;
}
//Simple for loop
console.log("for loop")
for(let i=0;i<3;i++)
{
    console.log(i+1);
}
//for loop -->object--> for in
const person={fname:"Manju",lname:"Linga"};
let text='';
console.log("For In loop for objects")
for(let position in person){
    console.log("key:",position," Value:",person[position]);
    text=text+person[position];//String concatination
}
console.log(text)
//for of loop--> checks  the each character  
let string="welcome";
console.log("for of loop")
for(let x of string){
    console.log(x);
}
//switch
console.log("Switch")
let n=2
switch(1){
    case 1:
        console.log("case 1");
        break;
    case 3:
        console.log("case 3") ;
        break;
    default:
        console.log("Invalid input");
        break;
}