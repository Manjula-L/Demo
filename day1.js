//To run JS--> Terminal-->New Terminal-->node file.js
//Variable Declaration
//variables intialized in "let" can be overridden
let name="manju";
console.log(name);
 name="manjula";
 console.log(name);
 const name1="manju";//value of const can't be changed
 console.log(name1);
 let number=10;
 let word="String";
 let array=[1,'a',2];
 let array2=[3,"abc",4];
 //object delaration
 let obj={
        product:"books",
        cost:100
 }
  console.log(obj)
  console.log(obj.product)
  console.log(obj.cost)
 //initialization for trim
 const trimExample="Welcome to javaScript";
 //initialization for replace
 let RegexExample="Welcome to Microsoft";
 //operrators
 let a=10;
 let b=5;//assignment operator
 //Arithmetic operators
 console.log("Addition",a+b);
 console.log("Subtraction",a-b);
 console.log("Multiplication",a*b);
 console.log("division",a/b);
 console.log("modulo division",a%b);
 //conditional operators--->returns true or false
 console.log("Greater number",a>b)//returns true or false
 console.log("Lesser Number",a<b)//returns true or false
 console.log("Checks equality",a==b)
 // if the condition is true ternary operator excutes first part berfore :
 //if the condition is false it will execute the condition after the :
 console.log("Ternary Bigger number",a>b?a:b);

 //String methods
 let st="Manjula Linganandam";
 let st1="upper";
 let st2="LOWER";
 console.log(st.length);//returns the length of the string
 console.log(st.charAt(0));// returns the particular character from the string
 console.log(st1.toLocaleUpperCase());//converts all the characters of the string into  uppercase
 console.log(st2.toLocaleLowerCase());//converts the string to lower case
 console.log(st.split('n'));
 let string1="This is javaScript";
 console.log(string1.search('Script'));//returs the index before the starting letter of the search string
 //Replace
 console.log(RegexExample);
 console.log(RegexExample.replace(/Microsoft/i,"Java"));//replace the firstword with the second irrespective of the case
 //fixed
 let x=54.343
 console.log("tofixed");
 console.log(x.toFixed(0))//prints the number of numbers after the decimal point
 console.log(x.toFixed(2));
 console.log(x.toFixed(6));
 //precision--->prints the number of numbers including the numbers before the decimal point
 let y=54.343
 console.log("precision");
 console.log("54.343 precision(2)=",y.toPrecision(2));
 console.log("54.343 precision(6)=",y.toPrecision(5));

