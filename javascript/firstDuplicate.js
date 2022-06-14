/**
 * Find the first duplicate in an array.
 * 
 * @param {array} arr
 * @return {array|number}
 */
function solution(arr) {
  /** Store each element from the given array as a unique value */
  let elementSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    /** 
     * Check to see if the Set already contains the element
     * that we're currently on in our loop 
     */
    if (elementSet.has(arr[i])) return arr[i];
    /** 
     * The element isn't in our Set yet, in which case we add
     * it to the Set and move on to the next element in the array 
     */
    elementSet.add(arr[i]);
  }

  /** No duplicates */
  return -1;
}
