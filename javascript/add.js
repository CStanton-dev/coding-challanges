/** 
 * Write a function that returns the sum of two numbers.
 * 
 * @example
 * // Contraints
 * // -1000 <= param1 <= 1000
 * // -1000 <= param2 <= 1000 
 * param1 = 1 param2 = 2
 * solution(param1, param2) = 3
 * 
 * @param {string} param1
 * @param {string} param2
 * @return {number} 
 */
function solution(param1, param2) {
  if (isNaN(param1) || isNaN(param2)) {
    console.error("Please enter valid numbers...");
    throw TypeError
  } else {
    const sum = param1 + param2;
    console.log("The sum is ", sum);
    return sum;
  }
}