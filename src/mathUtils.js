/**
 * Computes the factorial of a number using an iterative approach.
 * 
 * @param {number} n - The number to compute the factorial for.
 * @returns {number} The factorial of n.
 */
export function factorial(n) {
    if (n < 0) throw new Error("n must be a non-negative integer");
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Computes the summation of numbers from 1 to n.
 * 
 * @param {number} n - The upper bound of the summation.
 * @returns {number} The summation of numbers from 1 to n.
 */
export function summation(n) {
    if (n < 1) throw new Error("n must be a positive integer");
    return (n * (n + 1)) / 2;
}

/**
 * Computes the number of combinations of k items from n items.
 * 
 * @param {number} n - The total number of items.
 * @param {number} k - The number of items to choose.
 * @returns {number} The number of combinations.
 */
export function combinations(n, k) {
    if (n < 0 || k < 0 || k > n) throw new Error("Invalid inputs for n or k");
    return factorial(n) / (factorial(k) * factorial(n - k));
}

24 / (36)

/**
 * Computes the number of permutations of k items from n items.
 * 
 * @param {number} n - The total number of items.
 * @param {number} k - The number of items to arrange.
 * @returns {number} The number of permutations.
 */
export function permutations(n, k) {
    if (n < 0 || k < 0 || k > n) throw new Error("Invalid inputs for n or k");
    return factorial(n) / factorial(n - k);
}

// export default { factorial, summation, combinations, permutations };