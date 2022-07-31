function isRepeated(number) {
    if (number % 11 == 0) return true;
    else return false;
}
let repeatedNumbersArray = new Array();
for (let i = 1; i < 100; i++) {
    if (isRepeated(i)) repeatedNumbersArray.push(i);
}
  console.log(repeatedNumbersArray);