// Utility Logic

function noInput(num1, num2) {
  return ((num1.length === 0) || (num2.length === 0));
}

//Buisiness Logic

function countUpBy (countBy, countTo) {
  if (noInput(countBy, countTo)) {
    return 0;
  }
  let multiples = [];
  for (let i = countBy; i <= countTo; i += countBy) {
    multiples.push(i);
  }
  return multiples;
}
