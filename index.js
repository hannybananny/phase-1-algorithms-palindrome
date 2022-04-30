function isPalindrome(word) {
  let reverseWord = word.split('').reverse().join('')
  if(word === reverseWord){
    return true
  }
  else{
    return false
  }
}

/* 
  Argument is recieved as string
  Check to see if string is palindrome
    Split string
    Reverse string
    Join string
  If string is palindrome, return true
  If string is not palindrome, return false
*/

/*
  To check to see if the word is a palindrome,
  the reveresed word should equal the initial word.
  The split() method breaks the string into individual letters
  The reverse() method will reverse the order of the letters
  The join() method will join the letters into a string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("hannah"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome('carrot'))
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
