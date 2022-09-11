// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
    let sumOfTheNumbers = 0;
  arrayOfNumbers.forEach(numbers=>{
    sumOfTheNumbers += numbers;
  })
  return sumOfTheNumbers;
}
 assignment.sumOfNumbers = sumOfNumbers;
// console.log(sumOfNumbers([1, 4, 9]));

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {

  return arrayOfNumbers.length;
 
}
// assignment.countEvenNumbers = countEvenNumbers;
//second question solution
 // let count = 0;
  // arrayOfNumbers.forEach(numbers => {
  //   if(numbers % 2 ==0){
  //     count += 1;
  //   }
  // })
  //   return count;
// console.log(countEvenNumbers([1, 7, 8, 7]));

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {

  let numbersOfArr = [];
  arrayOfNumbers.forEach(item => {
    let converted = (item * 9/5) + 32;
    converted = Math.trunc(converted);
    numbersOfArr.push(converted);
  })
    return numbersOfArr;
}
 assignment.celsiusToFahrenheit = celsiusToFahrenheit;
// console.log(celsiusToFahrenheit([15, 30, 1]));


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

