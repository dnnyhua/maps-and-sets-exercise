/****************
Quick Question #1
*****************
What does the following code return? */

new Set([1,1,2,2,3,4]) 
// {1, 2, 3, 4}



/****************
Quick Question #2
*****************

What does the following code return? */

[...new Set("referee")].join("")
// 'ref'
// Set will first be returned as an array with duplicates removed ( ie [‘r’, ‘e’, ‘f’], and join will combine each letter into a single string




/****************
Quick Question #3
*****************

What does the Map m look like after running the following code? */

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);  

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/



/****************
Question #4
hasDuplicate
*****************

Write a function called hasDuplicate which accepts an array and returns true or 
false if that array contains a duplicate */

function hasDuplicate(nums){
  const [...stuff] = new Set(nums)
  return stuff.length !== nums.length;
}


/* better way to code above

const hasDuplicate = (nums) => new Set(nums).size !== nums.length;  */



/****************
Question #5
vowelCount
*****************

Write a function called vowelCount which accepts a string and returns 
a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }  */


// check if a char is a vowel
function isVowel(someChar) {
  return 'aeiou'.indexOf(someChar) !== -1;
}

function vowelCount(someString){
  const vowelMap = new Map();
  for(let char of someString){
    let lowerChar = char.toLowerCase();
    if(isVowel(lowerChar)) {
      if(vowelMap.has(lowerChar)) {
        vowelMap.set(lowerChar, vowelMap.get(lowerChar) +1);
      }
      else {vowelMap.set(lowerChar, 1);
      }
    }
  }
  return vowelMap;
}