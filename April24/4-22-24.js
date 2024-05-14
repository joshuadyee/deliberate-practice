//FFC Finders Keepers

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

// FFC Boo who

function booWho(bool) {
  // if boolean, return true
  // else, return false
  if (typeof bool === "boolean") {
    return true
  } else {
    return false
  }
}

booWho(null);

// FFC Title Case a Sentence

function titleCase(str) {
  // function takes in a string
  // return the string with first letter of each word capitalize
  // Steps: 
    // downcase
    // split words (" ")
    // uppercase first letter of each word
    // combine first letter with rest of word
    // return new string

  // console.log(str.toLowerCase())
  let words = str.toLowerCase().split(" ")
  let updatedWords = []
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let firstLetter = word[0].toUpperCase()
    let restOfWord = word.slice(1)
    updatedWords.push(firstLetter + restOfWord)
  }
  return updatedWords.join(" ")
}

console.log(titleCase("I'm a little tea pot"))