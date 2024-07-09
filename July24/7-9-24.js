function containsDuplicate(nums) {
  // if nums contains a duplicate => true
  // no duplicate => false
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    for (let j = 0; j < nums.length; j++) {
      // console.log(nums[i], nums[j])
      if (i === j) { // same index, skip
      } else if (nums[i] === nums[j]) {
        return true
      } 
    }
  }
  return false
}

// console.log(containsDuplicate([1,2,3]))
// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([1,2,3,4,5,6,7,8]))

// is a valid solution, exceeds time limit for Leetcode editor


function containsDuplicate(nums) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (hash[num] === undefined) {
      hash[num] = 0 
    } 
    hash[num]++
  }
  // console.log(hash)
  // console.log(Object.values(hash))
  const values = Object.values(hash)
  for (let i = 0; i < values.length; i++) {
    if (values[i] > 1) {
      return true
    }
  }
  return false
}

// console.log(containsDuplicate([1,2,3]))
// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([1,2,3,4,5,6,7,8]))


// Better solution, not the best

function containsDuplicate(nums) {
  const seen = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true
    }
    seen.add(nums[i])
  }
  return false
}

// Very good solution (Set stores unique values only)

// console.log(containsDuplicate([1,2,3]))
// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([1,2,3,4,5,6,7,8]))

// let nums = [1,2,3,4,4,5]
// const seen = new Set(nums)
// console.log(seen)


// favorite solution I've seen (hash)

function containsDuplicate(nums) {
  let hash = {}   // init hash
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]   // get the current elem
    if (hash[num] !== undefined) {
      return true // if the elem is already in the hash, return true
    } 
    hash[num] = true    // if the elem is not in the hash, add it
  }
  return false    // if no duplicates, return false
}

console.log(containsDuplicate([1,2,3]))
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4,5,6,7,8]))


// ##########

nums = [3, 2, 4], target = 6
// output would be [1,2]

// const twoSum = function(nums, target) {
//   // given an array of nums
//   // given a target sum
//   // find which 2 nums in the array total to the target sum
//   // can NOT use the same num/elem twice
//   // return the indices of those nums as an array (ex: [0, 1]) 
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         if (i !== j) {
//           return [i, j]
//         }
//       }
//     }
//   }
// }

// console.log(twoSum(nums, target))

// works fine but nested loops have poor time complexity => 0(n ^ 2)


// hash method 

function twoSum(nums, target) {
  let hash = {}   // hash table
  for (let i = 0; i < nums.length; i++) {   // iterate through nums
    let currentNum = nums[i]    // current num
    let complement = target - currentNum    // complement
    if (hash[complement] !== undefined) {   // if complement exists in hash
      return [hash[complement], i]    // return the indices of the complement and current num
    }
    hash[currentNum] = i    // add current num to hash 
  }
}

console.log(twoSum(nums, target))


// #############

function isPalindrome(x) {
  let arr = x.toString().split("")
  let reverse = arr.reverse().join("")
  return reverse === x.toString()
}

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false

// not the fastest but it works. Try to two more solutions, an optimized one and one without .toString()