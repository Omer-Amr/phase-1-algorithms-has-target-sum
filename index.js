function hasTargetSum(array, target) {
  // Write your algorithm here
 let isTrue = false

 for(i = 0; i < array.length; i++ ){
  for(j= i+1; j < array.length; j++){
    if(array[i] + array[j] === target){
      isTrue = true
    }
  }
}

return isTrue
}

console.log(hasTargetSum([4, 5, 9, 6, 13, 7], 15))
console.log(hasTargetSum([2, 6, 23, 6, 14, 30], 100))


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
