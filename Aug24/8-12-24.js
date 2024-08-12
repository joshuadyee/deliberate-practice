// Sales by Match - HackerRank

  // given n = number of socks (ar.length)
  // given ar = each sock
  // each sock (ar[i]) represents a different sock color
  // find how many pairs can be made

  // freq map the sock values
  // with an arr of the matched socks, divide the values by 2 and sum the 

function sockMerchant(n, ar) {
  let socks = {}  // init a freq map of sock colors and their values
  for (let i = 0; i < n; i++) { // iterate through the sock colors
    let sock = ar[i]  
    if (socks[sock] === undefined) {  
      socks[sock] = 0
    }
    socks[sock]++ // increment the sock color value
  }
  let sortedSocks = Object.values(socks)  // return the values of the freq map
  return sortedSocks
    .map(sock => Math.floor(sock / 2))  // divide the values by 2 and round down
    .reduce((sum, num) => sum + num)  // sum the appropriate values
}


console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // return 3


// optimized solution

function sockMerchant(n, ar) {
  let socks = {}
  let pairs = 0
  for (let i = 0; i < n; i++) {
    let sock = ar[i]
    if (socks[sock] === undefined) {
      socks[sock] = 0
    }
    socks[sock]++
    console.log(socks)
    if (socks[sock] % 2 === 0) {  
      pairs++ 
    }
  }
  return pairs
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // return 3

// This solution counts the number of pairs of socks in real time as the socks are added to the freq map. 