console.log("Hello Developers.      ")

let str = "   Hello Developer cat dog  "

console.log(str.length) //length

console.log(str.charAt(9)) //character

console.log("a".charCodeAt(9)); //ASCII Code

//SUBSTRING FUNCTION

console.log(str.substring(8)); //All the characters from index 8

//Start<end
console.log(str.substring(9,11)); //All the characters from index 8 till last index-1


//Start>end
console.log(str.substring(11,9)); //Will treat it the same as (9,11) because it would swap them


//-ve
console.log(str.substring(-100)); //prints 0 to end of the string

//SLICE FUNCTION 
let str1 = str.slice(9);  //All the characters from index 9 
console.log(str1);

//Start<end
let sl1 = str.slice(10,12);
console.log(sl1);

//Start>end
let sl2 = str.slice(12,10);
console.log(sl2);

//-ve 

let sl3 = str.slice(-10);  //cuts from the end of the string. (Return 10 characters from the end of the string)
console.log(sl3);

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.includes("Dog")); //CASE SENSITIVE , searches the given substring in the string. Returns boolean
