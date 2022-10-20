/* flat map method */
var array = [[undefined], [1, 2], [undefined], [4, 5]];

console.log(
  array.flatMap((item) => (item[0] && item[1] ? item[0] + item[1] : item))
);
console.log(array);

/*

None mutative 

map that flats 
*/
