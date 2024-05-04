// FFC Where Do I Belong

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a,b) => a - b) // sort the array in ascending order
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
} 

console.log(getIndexToIns([3, 4, 5, 1, 6], 2)) // 1

// FFC Mutations

function mutation(arr) {
  let downcased = arr.map(word => word.toLowerCase()) // downcase the words
  let first = downcased[0]
  let second = downcased[1]
  for (let i = 0; i < second.length; i++) { // loop through the second word
    if (first.indexOf(second[i]) === -1) { // if the first word does not contain the letter of the second word
      return false
    }
  }
  return true
}

console.log(mutation(["hello", "hey"])) // false


// FFC Chunky Monkey

function chunkArrayInGroups(arr, size) {
  let newArr = []
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }
  return newArr
}

console.log(chunkArrayInGroups([1,2,3,4,5,6], 2))


// Leetcode Two Sum

let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if(nums.indexOf(target - nums[i]) !== -1 && nums.indexOf(target - nums[i]) !== i) {
      return [i, nums.indexOf(target - nums[i])]
    }
  }
}

console.log(twoSum([2,7,11,15], 22)) // [1,3]


// LC Add Two Numbers

