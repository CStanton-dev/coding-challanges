/** 
 * Given a year, return the century it is in.
 * 
 * The first century spans from the year 1 up to
 * and including the year 100, the second - from the
 * year 101 up to and including the year 200. etc.
 * 
 * @example
 * // Constraints
 * // 1 <= year <= 2005
 * // year = 1905
 * // solution(year) = 20
 * 
 * @param {number} year
 * @return {number} 
 */
function solution(year) {
  const century = Math.ceil(year/100)
  console.log("The century for the year " + year + " is ", century);
  return century;
}