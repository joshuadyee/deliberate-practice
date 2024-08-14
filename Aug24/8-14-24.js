// Between Two Sets - HackerRank

function getTotalX(a,b) {
  // given 2 arrays of integers
  // must satisfy 2 conditions:
    // 1. Elems of 1st array are factors of the possible number
    // 2. The possible number being considered is a factor of all elems in the 2nd arr
  // return how many of these numbers exist 

    // find LCM of 1st arr
    // find GCD/HCF of 2nd arr
    // find all the multiples of LCM up to GCD which divides into the GCD evenly

    let validCount = 0
    for (let i = 1; i <= 100; i++) {
      if (a.every(int => (i % int === 0))) {
        if (b.every(int => (int % i === 0))) {
          validCount++
        }
      }
    }
    return validCount
}

console.log(getTotalX([3,4], [24,48])) // => 2 (12, 24)
console.log(getTotalX([2,4], [16,32,96])) // => 3 (4, 8, 16)


// This solution is not efficient and will not work for large inputs. 