const firstNumber = +prompt('Enter your first number');
const secNumber = +prompt('Enter your second number');
const thirdNumber = +prompt('Enter your third number');
const middleSum = (firstNumber + secNumber + thirdNumber) / 3;
const result = alert(`Your middle sum is ${middleSum}`);

/* if (typeof middleSum === Number) {
    alert(`your middle sum is ${middleSum}`);
} else if (typeof middleSum === NaN) {
    alert(`you entered incorrect number`);
}  */
