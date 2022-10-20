/* reduce right method */
var array = [1, 2, 3, 4, 5, 6];

// Same as reduce but starts at the right
// Lets say we want to add all the numbers in the array

// Acc is the previous return ot previous value,
// value is the current
// 0 is the start value
// The start value value can be any type

console.log(array.reduceRight((acc, val) => acc - val));

/*

none mutative 
Calls the specified 
callback function for all the elements in
 an array. The return value of the callback 
 function is the accumulated result, and 
is provided as an argument in the next 
call to the callback function.


*/
