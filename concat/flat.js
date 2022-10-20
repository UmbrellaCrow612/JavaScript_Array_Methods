/* flat method */
var array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

console.log(array.flat(2));
console.log(array);

/*

None mutative 

Returns a new array with all sub-array 
elements concatenated into it 
recursively up to the specified depth.

*/
