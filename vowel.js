
function countVowels(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;
  const letters = Array.from(sentence);
//  console.log(letters);
  letters.forEach((value) => {
    if(vowels.includes(value)){
      count++;
      // console.log(value);
    }
  })
  // return count;
}

let vowel = countVowels(" i Love Bangladesh");
console.log(vowel);