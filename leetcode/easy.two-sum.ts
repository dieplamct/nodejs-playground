// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation:
// The sum of nums[0] and nums[1] is 2 + 7 = 9, which equals the target. Therefore, the indices [0, 1] are returned.

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Explanation:
// The sum of nums[1] and nums[2] is 2 + 4 = 6, which equals the target. Therefore, the indices [1, 2] are returned.

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// Explanation:
// The sum of nums[0] and nums[1] is 3 + 3 = 6, which equals the target. Therefore, the indices [0, 1] are returned.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let arrIndex = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] === target) {
            arrIndex.push(i, i + 1)
        }
    }

    if (arrIndex.length === 0) {
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 2; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    arrIndex.push(i, j)
                }
            }
        }
    }
    return arrIndex;
};

const input1 = [2, 7, 11, 15]
const input2 = [3, 2, 4]
const input3 = [3, 3]
const input4 = [3, 2, 3]

console.log("Test case 1: ", twoSum(input1, 9));
console.log("Test case 2: ", twoSum(input2, 6));
console.log("Test case 3: ", twoSum(input3, 6));
console.log("Test case 4: ", twoSum(input4, 6));