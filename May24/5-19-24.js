// CCDMY Top Score Sorter

const scoreSorter = (array, topScore) => {
  // given array of test scores
  // return sorted array highest to lowest
  // don't use .sort
  let sortedArray = []  
  for (let i = 0; i < array.length; i++) {
    let score = array[i]
    if (sortedArray.length === 0) {
      sortedArray.push(score)
    } else {
      for (let j = 0; j < sortedArray.length; j++) {
        if (score > sortedArray[j]) {
          sortedArray.splice(j, 0, score)
          break
        } else if (j === sortedArray.length - 1) {
          sortedArray.push(score)
          break
        }
      }
    }
  }
  return sortedArray
}

console.log(scoreSorter([1,2,3,9999,10]))