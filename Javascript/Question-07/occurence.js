// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. 
// The array is searched backwards, starting at fromIndex.


const arr = ['pw skills', 'pw skills', 'Google', 'Microsoft', 'Apple', 'pw skills', 'IBM', 'Oracle', 'Amazon'];
const lastIndex= arr.lastIndexOf("pw skills");
console.log("Last Index inside Array :",lastIndex);

// Syntax :lastIndexOf(searchElement, fromIndex)
//now if we use lastIndex value to find the nexttIndex it will count from lastIndex thus will give the same answer thus we use lastIndex-1
const nextIndex = arr.lastIndexOf("pw skills",lastIndex-1);
console.log ("Next Index inside Array :",nextIndex);

const firstIndex = arr.indexOf("pw skills");
console.log("First Index inside Array :",firstIndex);

