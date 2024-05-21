// CCDMY Maximize Stock Trading Profit

function maxProfitDays(stockPrices) {
  // given array of stock prices
  // find min price and max price 
  // return index of those prices as a new array [minPriceIndex, maxPriceIndex]
  
  // let minPrice, maxPrice = prices[0]
  let copyArr = stockPrices.slice()
  let sortedPrices = copyArr.sort((a,b) => a - b)
  let minPrice = sortedPrices[0]
  let maxPrice = sortedPrices[sortedPrices.length - 1]
  let minMax = []
  // console.log(stockPrices)
  // console.log([minPrice, maxPrice])
  for (let i = 0; i < stockPrices.length; i++) {
    if (stockPrices[i] === minPrice) {
      minMax.push(i)
    } else if (stockPrices[i] === maxPrice) {
      minMax.push(i)
    }
  }
  return minMax
}

console.log(maxProfitDays([1, 2, 3, 4, 33, 10]))

// optimized 
 
function maxProfitDays(stockPrices) {
  let minPrice = stockPrices.indexOf(Math.min(...stockPrices))
  let maxPrice = stockPrices.indexOf(Math.max(...stockPrices))
  return [minPrice, maxPrice]
}

console.log(maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]))


// CCDMY GetX

function getX(x, nums) {
  // given int x
  // given integer array nums 
  // return the Xth number if the list was sorted

  let sortedArray = nums.sort((a, b) => a - b)
  if (x > 0 && x <= sortedArray.length) {
    return sortedArray[x - 1]
  } else {
    return "X not a valid integer"
  }
}

console.log(getX(3, [5, 10, -3, -3, 7, 9]))