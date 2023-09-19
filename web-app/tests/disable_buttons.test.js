
 // the disable_buttons function uses a for loop to iterate over the letters array
// It starts at 0 and will continue as long as i is less than length of the letters array
// the HTML element is obtained using its id and then concatenated with letter-
// Disabled property disables eleemnt when set to true so player can no longer interact with the letters buttons making the game stop

describe("disable_buttons", function() {

    it('Given the game has been lost/ended; when lives=0; then game will disable all letter buttons so they can no longer be interacted with',
     function() {

    });
})



// // Code to write test file  for:
// function disable_buttons(){
//     letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//     for (let i = 0; i < letters.length; i++) {
//         document.getElementById("letter-" + letters[i]).disabled = true;
//     }
// }