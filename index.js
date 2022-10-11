const firstNumber = +prompt('Enter your first number');
const secNumber = +prompt('Enter your second number');
const thirdNumber = +prompt('Enter your third number');

if (isNaN(firstNumber) || isNaN(secNumber) || isNaN(thirdNumber)) {
    alert(`You entered incorrect number`);
} else {
    const middleSum = (firstNumber + secNumber + thirdNumber) / 3;
    alert(`Your middle sum is ${middleSum}`);
}


