// FFC Diff Two Arrays

function diffArray(str) {
  // passed 2 arrs
  // compare both arrs
  // return new arr with elems found in only one of the two given arrs
  // (find the symmetric difference)


  let repeatedWord = ""

  for (let i = 0; i < 5; i++) {
    repeatedWord += str
  }
  return repeatedWord
}

console.log(diffArray("hello"))