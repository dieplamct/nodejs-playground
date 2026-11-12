// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    const subMap = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (null !== s[i + 1] && subMap.hasOwnProperty(s[i] + s[i + 1])) {
            total += subMap[s[i] + s[i + 1]]
            i = i + 1
        }
        else {
            total += romanMap[s[i]]
        }
    }
    return total
};

console.log(romanToInt("III")) // 3
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994