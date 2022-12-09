//1. Given an array of numbers which is almost sorted in ascending order.Find the index where sorting order is violated.

const arr = [-9, -4, -4, 3, 12, 4, 5]
function findNotSortedIndex(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return i;
        }
    }
    return -1;
}

console.log(findNotSortedIndex(arr))


// 2. Given an array consisting from the arrays of numbers(like a two - dimensional array).Find sum of each row and print them as an array// Input Output
// [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]][12, 1, 13, 15]

let array = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]



function sumOfArray(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = 0; j < array[i].length; j++) {
            sum += array[i][j]
        }
        newArray.push(sum)
    }
    return newArray
}
console.log(sumOfArray(array))

//solution with array methods

const arr = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];
const sum = arr.map(el => el.reduce((a, b) => a + b))
console.log(sum);

//3. Given an array of integers.Write a function that return new array from first array,where removed even numbers, and odd numbers was multiplied with new array length

let array = [2, 4, 6, 87]
let newArray = []
let newArr = []
array.map((el) => {
    if (el % 2 === 1 || el % 2 === -1) {
        newArray.push(el)
    } {
        newArr = newArray.map((el) => el * newArray.length)
        return newArr
    }
})
console.log(newArr)


//4. Given three numbers a, b(a ≤ b) and step.Create an array of evenly spaced elements starting from a to b spaced by step.

const a = 1
const b = 5
const c = 0.5

function evenlySpaced(start, end, step) {
    let arr = [];
    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;
};
console.log(evenlySpaced(a, b, c))

