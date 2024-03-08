let inputString = prompt("Enter a string to be encrypted:");


function encryptCaesar(input, shift) {
  let encryptedString = "";

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char.match(/[a-z]/i)) {

      let code = input.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    encryptedString += char;
  }

  return encryptedString;
}

function decryptCaesar(input, shift) {
  return encryptCaesar(input, 26 - shift);
}

const shiftAmount = 3;

let encryptedResult = encryptCaesar(inputString, shiftAmount);
console.log("Encrypted Result:", encryptedResult);

let decryptedResult = decryptCaesar(encryptedResult, shiftAmount);
console.log("Decrypted Result:", decryptedResult);