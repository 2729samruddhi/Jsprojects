const product = {
    name: "parker jotter standard CT ball Pen(lack)",
    rating: 7200,
    price: 270,
    offer: 5
}
console.log(product);

function twoSum(nums, target) {
    const map = {}; // This will store number as key, index as value
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;
  
      if (map.hasOwnProperty(complement)) {
        return [map[complement], i];
      }
  
      map[num] = i;
    }
  
    // If no solution is found (but question says there's always one)
    return [];
  }

  const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]


var newCounter = function(n){
  let value=n;
  return function(){
    return value++;
  }
}
let counter=newCounter(-2);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



  