// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('')

// }

// function reverse(str) {
//   let reversed = '';


//   for (let ch of str) {
//     reversed = ch + reversed
//   }
//   return reversed;
// }



function reverse(str) {
  return str.split('').reduce((reversed, ch) => {
    return ch + reversed;
  }, '');


}

console.log(reverse("applE"));

module.exports = reverse;
