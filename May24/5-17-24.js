// CCDMY Find the Missing Numbers

function missingNos(array, k) {
  // given an array of consecutive, non-repeating nums
  // k => array.length
  // return missing nums as an array (smallest to largest)
  
  // 1. create loop with nums between arr[0] to arr[k-1]
  const newArray = []
  const missingNums = []
  const lastElement = array.slice(-1) // get last element in the array
  // console.log(lastElement)
  for (let i = array[0]; i <= lastElement; i++) {
    newArray.push(i)
  } 
  // console.log("new Array", newArray)
  for (let i = 0; i < newArray.length; i++) {
    if (array.indexOf(newArray[i]) < 0) {
      missingNums.push(newArray[i])
    }
  } 
  return missingNums
}

const testArray = [1, 2, 4, 5, 6, 7, 8, 10];
console.log(missingNos(testArray, 2));

