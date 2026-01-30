let arr = [1,,2,3,4,5,6,7];

//let arr2 = new Array(10,20,30);
//console.log(arr2);

//To get a part of an array
console.log(arr);
let subArr = arr.slice(2,6);
console.log(arr);
console.log(subArr);

//Splice;

///Remove elements..
arr.splice(2,3); //startingIndx,no. of elements to be removed
console.log("spliced arr",arr);

//Remove and add elements splice(startIDX , no of elem , elem1 , elem2 , elem3...elemN)

//1,2,3,4,5,6,7;
arr.splice(2,2,10,20,30,40) //1,2,10,20,30,40,5,6,7
console.log(arr);

//Can be used to add elements in middle of the array