// Subarray Division HR

function birthday (s, d, m) {
  // chocolate bar made of squares, each sq has an integer on it
  // s = array of ints, s[n]: the nums on each square of chocolate
  // d = Ron's birth day
  // m = Ron's birth month 

  // for each shared segment, Lily wants:
    // sum of ints === d
    // length of segment === m
  // return: num of ways the bar can be divided
  // if there's no correct ways of dividing the bar, return 0

  let count = 0
  for (let i = 0; i < s.length; i++) {
    let arr = s.slice(0 + i, m + i)
    if (arr.reduce((a, b) => a + b) === d) {
      count++
    }
  }
}

console.log(birthday([1,2,1,3,2], 3, 2))


// Migratory Birds

function migratoryBirds(arr) {
  // passed arr 
    // every elem represents a bird type id
  // determine most frequently occurring id 
  // if > 1 type of id has been spotted same amount, return the lowest id
  
  let idCounter = {}
  for (let i = 0; i < arr.length; i++) {
    let id = arr[i] 
    if (idCounter[id] === undefined) {
      idCounter[id] = 0
    }
    idCounter[id]++
  }
  console.log(idCounter)
  let maxValue = 0
  let key = null
  for (let id in idCounter) { 
    // if (idCounter.hasOwnProperty(id)) {    
      if (idCounter[id] > maxValue) {
        maxValue = idCounter[id]
        key = id 
      }
    // }
  }
  return key
}

console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]))