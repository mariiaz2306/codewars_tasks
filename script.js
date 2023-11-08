//домашка
// You need to double the integer and return it.
// If there is no integer in the array, you should return null.
function doubleInteger(i) {

    if (Number.isInteger) {
        return i * 2;
    }
    return i;
}
console.log(doubleInteger(2));





//Вам даны два внутренних угла (в градусах) треугольника.
//Напишите функцию, чтобы вернуть третий.



function otherAngle(a, b) {
    const theThirdAngle = 180 - (a + b)
    return theThirdAngle;
}
console.log(otherAngle(60, 60));



//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
//Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
    let str = '';
    for (let index = 1; index <= num; index++) {
        str += index + '' + ' sheep ' + ''

    }
    return str
}
console.log(countSheep(7));
////// vacation mode
function setAlarm(employed, vacation) {
    if (employed === true && vacation === true) { return false }
    if (employed === true && vacation === false) { return true }
    if (employed === false && vacation === true) { return false }
    if (employed === false && vacation === false) { return false }
}
///////bus stop task
const busStops = [2, 3, 6, 2, 1, 4, 5, 7]
var number = function (busStops) {
    return busStops.map(people => people[0] - people[1]).reduce((people, leftOver) => people + leftOver)
}
console.log(number(busStops));


////// зверьки
function feast(beast, dish) {
    return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1)
}
console.log(feast('rabbit', 'raddit'));


////// perimeter

const areaOrPerimeter = function (l, w) {
    return l === w ? l * w : (l + w) * 2
};
console.log(areaOrPerimeter(3, 3));

//


//messi
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals
    return totalGoals
}
console.log(goals(2, 4, 7));

//square
const arr = [4, 3, 9, 7, 2, 1]

const squareOrSquareRoot = () => arr.map(el => Math.sqrt(el) % 1 == 0 ? Math.sqrt(el) : (el * el));
console.log(squareOrSquareRoot(arr));


//abbreviation

function abbrevName(name) {

    return name.split(' ').map(n => n[0].toUpperCase()).join('.')
    return shortName

}
console.log(abbrevName("John Doe"));

///

function mergeArrays(array1, array2) {
    return Array.from(new Set([...array1, ...array2])).sort((array1, array2) => array1 - array2);
}
console.log(mergeArrays(array1)(array2));

//sum of 2 arrays

function arrayPlusArray(arr1, arr2) {
    let total = 0
    for (let i = 0; i < arr1.length; i++) {
        total += arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        total += arr2[i]
    }

    return total
}
// prelast

function countPositivesSumNegatives(input) {

    if (input === null || input.length === 0) {
        return [];
    }
    let positiveNum = 0;
    let negativeNum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveNum++;
        } else {
            negativeNum += input[i]
        }
    }
    return [positiveNum, negativeNum]
}
//// the last one

function positiveSum(arr) {
    let positiveNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNum += arr[i];
        }
    }
    return positiveNum
}