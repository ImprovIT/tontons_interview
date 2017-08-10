 /*
 * Given a string, reverse each word in a the sentence
 * */

 let reverse = "Mary would you mary me";
 let result= [];
 reverse.split(' ').forEach((item) => {
    result.push(item.split("").reverse().join(''));  
 });
 console.log(`Reverse of '${reverse}' is '${result.join(" ")}'`);

 /*
 * Given two strings, return true if they are anagrams of one another
 * */

 let wordOne = "Pascal Obispo";
 let wordTwo =  "Pablo Picasso";
 // => returns true !
 function anagrams(wordOne, wordTwo){
     if(wordOne.length !== wordOne.length)
        return false;
     for(let i =0; i<wordOne.length; i++){
        //console.log(wordOne[i]);
        if(wordOne[i].toLowerCase() !== wordTwo[i].toLowerCase()){
            let currentChar = wordOne[i];
            let searchChar =  wordTwo[i];
            for(let j = i; j<wordOne.length; j++){
                //if char smiliar found, swap
                if(wordOne[j].toLowerCase() === searchChar.toLowerCase()){
                    //console.log("Found");
                   wordOne[i] = wordOne[j];
                   wordOne[j] = currentChar;
                   //console.log(wordOne.join(""));
                   break;
                }
            }
        }
     }
    //console.log(wordOne.join(""));
    //console.log(wordOne.join("").toLowerCase() === wordTwo.join("").toLowerCase());
    return wordOne.join("").toLowerCase() === wordTwo.join("").toLowerCase();
 }

if(anagrams(wordOne.split(""), wordTwo.split(""))){
    console.log(`'${wordOne}' and '${wordTwo}' are anagrams of one another ! :)`)
}


 /*
 * Check if a given string is a palindrome "Rotor" is a palindrome. "Race Car" should also be considered a palindrome.
 * Case sensitivity should be taken into account
 * */

let palindrome = "Eh ! ça va la vache";

let resultReverse= [];
let palindromeArray = palindrome.split(' ').reverse();

palindromeArray.forEach((item) => {
    resultReverse.push(item.split("").reverse().join(''));  
 });
 console.log(`Reverse of '${palindrome}' is '${resultReverse.join(" ")}'`);
//Need a string for isPalindrome
 let pladindrome_reverse = resultReverse.join(" ");

 if(isPalindrome(pladindrome_reverse.split(""), palindrome.split(""))){
     console.log(`'${palindrome}' est un palindrome !`)
 }
 
  function isPalindrome(wordOne, wordTwo){
     if(wordOne.length !== wordOne.length)
        return false;
     for(let i =0; i<wordOne.length; i++){
        if(wordOne[i] !== wordTwo[i]){
            let currentChar = wordOne[i];
            let searchChar =  wordTwo[i];
            for(let j = i; j<wordOne.length; j++){
                //if char smiliar found, swap
                if(wordOne[j] === searchChar){
                   wordOne[i] = wordOne[j];
                   wordOne[j] = currentChar;
                   break;
                }
            }
        }
     }
    //console.log(wordOne.join(""));
    //console.log(wordTwo.join(""));
    return wordOne.join("") === wordTwo.join("");
 }