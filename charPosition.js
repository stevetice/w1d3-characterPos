function countLetters(str) {
  var outputObject = {};

  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    // if letter = " " we need to skip this letter and continue on with the loop
    if (letter === " ") {
      continue
    }
    // Check to see if letter exists in outputObject. If it doesn't exist add the letter as a key with the first index value.
    if (outputObject.hasOwnProperty(letter) !== true)
      outputObject[letter] = [i];

    // If letter exists in outputObject we will add the next index value to the array.
    else
      var addIndex = outputObject[letter].push(i);
  }
return outputObject;
};
console.log(countLetters('lighthouse in the house'));
