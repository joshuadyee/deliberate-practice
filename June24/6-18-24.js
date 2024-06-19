// FFC Seek and Destroy

function destroyer(arr) {
  // passed arr as 1st argument 
  // followed by one of more args
  // remove elems from arr if they match the args

  const argsArr = []
  const values = Object.values(arguments)
  for (let i = 1; i < values.length; i++) {
    argsArr.push(values[i])
  }
  return arr.filter(e => !argsArr.includes(e))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) // [1, 1]
  
// or

function destroyer(arr) {
  const args = Array.from(arguments).slice(1)
  return arr.filter(e => !args.includes(e))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) // [1, 1]
