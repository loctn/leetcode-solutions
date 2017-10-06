// https://leetcode.com/problems/repeated-string-match

const repeatedStringMatch = (A, B) => {
    const count = Math.ceil(B.length / A.length)
    const str = A.repeat(count)
    return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1 
};