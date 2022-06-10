/**
 * Given an array of integers, find the pair of adjacent
 * elements that has the larget product and return that 
 * product.
 * 
 * @example
 * // Contraints
 * // 2 <= inputArray.length <= 10
 * // -1000 <= inputArray[i] <= 1000
 * inputArray[3, 6, -2, -5, 7, 3]
 * solution(inputArray) = 21
 * 
 * @param {array} inputArray
 * @return {number}
 */
function solution(inputArray) {
  // Starting number can be negative infinity.
  let maximumNumber = -Infinity;
  for (let i = 1; i < inputArray.length; i++) {
    maximumNumber = Math.max(inputArray[i] * inputArray[i -1], maximumNumber);
  }
  return maximumNumber;
}