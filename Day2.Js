//Array Methods
let array=[1,'a',2];
let array2=[3,'abc',4];
console.log(array);
console.log(array2);
//length of an array
console.log(array.length);
console.log(array.join(array2))//joins two array elements
console.log(array.join('*'));//joins array element using *-->return type string
//push-->adds one element at the end of the array
console.log(array.push("b"));
console.log(array);
//pop-->deletes the last element of an array--> also deletes the memory of the element
console.log(array.pop());
console.log(array);
//unshift-->add an element at start of an array
console.log(array.unshift('first'));//this console returns length of the array
console.log(array);//this console prints the array
//shift--> delete the first element of an array
console.log(array.shift())//This console prints which element is deleted
console.log(array)//prints the array after deletion using shift
//delete-->deletes the element in the particular index but memory of the element does not deleted
// i.e length of the array remains the same
console.log(delete array[0]);//return type boolean
console.log(array)
//Sorting:--> always sort to ascending order
let array3=[3,2,5,4,9,7,8];
console.log("Array before sorting");
console.log(array3);
console.log("Array after sorting");
console.log(array3.sort());
//Descending Order--> there is no method for descending order
// we need to reverse the sorted array to get elements in descending order
console.log("Array sorted in descending order",array3.reverse())
//Iteration methods in Array
let arrayIteration=[3,4,2,5,6];
//map-->has no condition, if we iterate return type=array
let mapExam = arrayIteration.map((i) => {
    return i
})
console.log("map", mapExam)
//Filter-->checks the condition with every element of an array 
// new array will be created with particular condition
let filterExam = arrayIteration.filter((i) => {
    return i>3;
})
console.log("Filter",filterExam)//return type array
//Find-->checks the condition with every element of an array
// stops the iteration when the condition is reached once
let FindExam = arrayIteration.find((i) => {
    return i>3
})
console.log("Find",FindExam)//return type-->Particular element
//Some-->Returns True/False for condition
//Checks all the element if any one element satisfy the condition then it will return True
let Somearray = arrayIteration.some((i) => {
    return i>5
})
console.log("Some-->",Somearray)
//Every-->checks evey element and every element should satisfy the condition
let everyArray= arrayIteration.every((i) => {
        return i>5;
})
console.log("Every-->",everyArray);// return type boolean
//INCLUDE--> checks wheather the element is present in an arrray
let Colors=["Red","Blue","Green","Orange","Yellow"];
console.log("Element included in an array",Colors.includes("Red"));//Return type Boolean
//Spead Operators-->Used for merging arrays
const a=[1,2,3,4,5,];
const b=[6,7,8,9,10];
const c=[11,12,13,14,15];
const newArray=[...a,...b,...c];//...a -->spread operator
console.log(newArray);








