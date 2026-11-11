// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

// Constraints:

// n == gain.length
// 1 <= n <= 100
// -100 <= gain[i] <= 100

function largestAltitude(gain: number[], calback: { (arrAltitude: number[]): any }): number {
    let current = 0
    let maxAltitude = 0;
    const arrAltitude: number[] = [];
    arrAltitude.push(current);
    for (let i = 0; i < gain.length; i++) {
        if (gain[i] <= 100 && gain[i] >= -100) {
            current += gain[i]
            if (current > maxAltitude) {
                maxAltitude = current
            }
        }
        else {
            continue
        }
        arrAltitude.push(current)
    }
    calback(arrAltitude)
    return maxAltitude
}

const gain = [-5, 1, 5, 0, -7];
let arrAltitude1: number[] = [];
let largestVal = largestAltitude(gain, (arrAltitude1) => {
    console.log(arrAltitude1)
})
console.log(largestVal)

let arrAltitude2: number[] = [];
const gain2 = [-4, -3, -2, -1, 4, 3, 2];
largestVal = largestAltitude(gain2, (arrAltitude2) => {
    console.log(arrAltitude2)
})
console.log(largestVal)