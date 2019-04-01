// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};

  let max = 0;
  let maxChar = '';

  for (let ch of str) {
    //console.log(ch);

    if (!chars[ch]) {
      chars[ch] = 1;
    } else {
      chars[ch]++;
    }

    for (let char in chars) {
      if (chars[char] > max) {
        max = chars[char];
        maxChar = char
      }

    }
  }

  return maxChar

}

console.log(maxChar("hello"));


module.exports = maxChar;
