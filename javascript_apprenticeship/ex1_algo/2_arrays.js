/*
* Remove all duplicates of an array and returning an array of only unique elements
* TIP : Check new ES6 Datatypes
* */

var myArray = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8, 8, 42, 76, 89, 76, 12];
let monSet = new Set();
myArray.forEach((item)=>{
    if(monSet.has(item) === false){
        monSet.add(item);
    }
});
let uniqueArray = Array.from(monSet); 
console.log(`Unique array : ${uniqueArray}`);

/*
* Given an array of integers, find the largest difference between two elements
* such that the element of lesser value must come before the greater element
* */

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
let monSetEx2 = new Set();

array.forEach((item)=>{
    if(monSetEx2.has(item) === false){
        monSetEx2.add(item);
    }
});

let bestVal = 0;
let largestDiff = null;

for (let item of monSetEx2){
    bestVal = bestValue(bestVal, item);
    if(largestDiff === null){
        largestDiff = bestVal - item;
    }else{
        if(largestDiff < (bestVal - item)){
            largestDiff = bestVal - item;
        }
    }
}
console.log(`Largest diff : ${largestDiff}`);

/**
 * 
 * Search for bestValue
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function bestValue(a,b){
    if(a > b)
        return a;
    return b;
} 
 
