// https://leetcode.com/problems/longest-palindrome

const longestPalindrome = (s) => {
    const counts = {}
    for (const c of s) {
        counts[c] = (counts[c] || 0) + 1
    }
    let odds = 0;
    for (const c in counts) {
        odds += counts[c] % 2
    }
    return s.length - odds + !!odds
};