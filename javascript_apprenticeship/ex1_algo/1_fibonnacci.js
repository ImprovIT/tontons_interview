"use strict";

/*
Write an ES6 simple algorithm which compute
the first 100n of the Fibonnacci sequence

As a friendly reminder :

∀ n > 2, i(n) = i(n-1) + i(n-2)

Bonus : Format the numbers (tip, check the numeral lib on npmjs.com)

*/

var rabbit = `             ,
            /|      __
           / |   ,-~ /
          Y :|  //  /
          | jj /( .^
          >-"~"-v"
         /       Y
        jo  o    |
       ( ~T~     j
        >._-' _./
       /   "~"  |
~~~~~~~~~~~~~~~~~~~~~~~~~~`;

var credits = `    Fibonacci Sequence
(La reproduction des lapins)`;

console.log(rabbit);
console.log(credits);

/* Play here */
function* Fibonacci()
{
    let v = 0;
    let prev = 1;
    while(true)
    {
        let prevV = v;
        yield v;
        v += prev;
        prev = prevV;
    }
}
var fibo = Fibonacci();
for(let i=0; i<= 100; i++){
    console.log(fibo.next().value);
}