function GetThreeDigitRandomNumber() {
    return Math.floor(Math.random() * 900 + 100);
}

let arrayOf3DigitRandomNumber = new Array();
for (let i = 0; i < 10; i++) {
    arrayOf3DigitRandomNumber.push(GetThreeDigitRandomNumber());
}
console.log("Ten 3 digits Random numbers are: " + arrayOf3DigitRandomNumber.toString());

FindLargestAndSmallest(arrayOf3DigitRandomNumber);
function FindLargestAndSmallest(arrayOfElements) {
    let firstLargest = 0,
        secondlargest = 0;
    let firstSmallest = 1000,
        secondSmallest = 1000;
    for (let i = 0; i < arrayOfElements.length; i++) {
        if (arrayOfElements[i] > firstLargest) {
            secondlargest = firstLargest;
            firstLargest = arrayOfElements[i];
        } else if (
            arrayOfElements[i] > secondlargest &&
            arrayOfElements[i] != firstLargest
        )
            secondlargest = arrayOfElements[i];
    }
    for (let i = 0; i < arrayOfElements.length; i++) {
        if (arrayOfElements[i] < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = arrayOfElements[i];
        } else if (
            arrayOfElements[i] < secondSmallest &&
            arrayOfElements[i] != firstSmallest
        )
            secondSmallest = arrayOfElements[i];
    }
    console.log("First largest number is: " + firstLargest);
    console.log("First smallest number is: " + firstSmallest);
    console.log("Second smallest number is: " + secondSmallest);
    console.log("Second largest number is: " + secondlargest);
};