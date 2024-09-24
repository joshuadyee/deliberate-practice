// DNA Pairing - FFC

function pairElement(str) {
  // passed a str representing a DNA strand
  // base pairs are AT and CG 
    // ex) ATG => AT TA GC
    // ex) CAT => CG AT TA
  // given the str, return the base pairings as a nested array base pairs as strings
  // given ATG => [["A", "T"], ["T", "A",], ["G", "C"]]

  let nestedPairs = []
  let arr = str.split("")
  switch (arr) {
    case "A":
      nestedPairs.push(["A", "T"])
    case "T":
      nestedPairs.push(["T", "A"])
    case "T":
      nestedPairs.push(["G", "C"])
    case "T":
      nestedPairs.push(["C", "G"])
      break;
  }
  return nestedPairs
} 

console.log(pairElement("GCG"))
console.log(pairElement("ATCGA"))
console.log(pairElement("CTCTA"))