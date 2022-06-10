/**
 * Given the string, check if it is a palindrome.
 * 
 * @example
 * // Contraints
 * // 1 <= inputString.length <= 10^5
 * // inputString = "aabaa"
 * // solution(inputString) =  true
 * 
 * @param {string} inputString 
 * @returns {boolean}
 */
function solution(inputString) {
    const len = Math.floor(inputString.length / 2);
    for (var i = 0; i < len; i++)
      if (inputString[i] !== inputString[inputString.length -i -1])
        return false;
    return true;
}