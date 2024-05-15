// FFC Seek and Destroy 

function destroyer(arr) {
  // given an array and a list of arguments
  // remove all elements from the array that are the same as the arguments
  // return the array
  let args = Object.values(arguments).slice(1)
  return arr.filter(el => args.indexOf(el) === -1)
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))


// HR Break the Records

function breakingRecords(scores) {
  // given arr (scores) that lists integers of points scored in a game
  // calc num of times new lowest score and new highest score was achieved
  // return 2 ints: num hi scores    num low scores
  let newHiScore = scores[0]
  let newLowScore = scores[0]
  let hiCount = 0
  let lowCount = 0
  
  for (let i = 0; i < scores.length; i++) {
    let score = scores[i]
    if (score > newHiScore) {
      newHiScore = score
      hiCount++
    } else if (score < newLowScore) {
      newLowScore = score
      lowCount++
    }
  }
  return [hiCount, lowCount]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))

  