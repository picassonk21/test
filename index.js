function getSumOfDigits(n) {
  console.log(n);
  const stringInputInArray = String(n).split('').reduce((acc,el) => Number(acc) + Number(el));
  if (stringInputInArray > 9) {
    return getSumOfDigits(stringInputInArray); 
  } else {
    return stringInputInArray;
  }
}

console.log(getSumOfDigits(91));