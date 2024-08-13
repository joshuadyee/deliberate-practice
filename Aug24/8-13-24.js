// Bill Division - HackerRank

function bonAppetit(bill, k, b) {
  // bill => array of prices
  // k => price of item Anna doesn't eat (k = bill[i])
  // b => Anna's contribution to the bill (already paid)
  // print "Bon Appetit" if the bill is split evenly
  // otherwise print amount of money that Brian owes Anna

    // remove k from the bill
    // sum remaining values and divide by 2
    // if sum > b => "Bon Appetit"
    // if sum < b => b - sum
  
  bill.splice(k, 1) // remove item that Anna didn't eat from the bill
  let annaAmount = bill.reduce((sum, price) => (sum + price)) / 2   // find the sum of the remaining values in bill, divide by 2 to get Anna's real portion of the bill

  if (b <= annaAmount) {
    console.log('Bon Appetit')  
    // if Anna paid less than or equal to her portion (annaAmount), return Bon Appetit
  } else {
    console.log(b - annaAmount)   
    // else return her contribution - her portion of the bill
  }
}

console.log(bonAppetit([3,10,2,9], 1, 12)) // => 5
console.log(bonAppetit([3,10,2,9], 1, 7)) // => Bon Appetit