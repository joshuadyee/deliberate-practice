// Wherefore Art Thou - FFC

function whatIsInAName(collection, source) {
  // look through arrays of objs (collections)
  // return a new array of all objs that have matching name/value pairs with source

  const collectionMatches = []
  // iterate through collection
  for (let i = 0; i < collection.length; i++) {
    let foundMismatch = false
    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        foundMismatch = true
      }
    }
    if (!foundMismatch) {
      collectionMatches.push(collection[i])
    }
  }
  return collectionMatches
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source) 
  return collection.filter(obj => {
    for (let i = 0; i <sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false
      }
    }
    return true
  })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))


// The second solution is more concise and uses the filter method to return the desired array. I wasn't sure how to do this and had to copy the solution. Study this and learn how to use filter method to return an array of objects that match the key/value pairs of the source object.