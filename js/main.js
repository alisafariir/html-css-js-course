// var firstName = "Ali";
// let age = 32;
// let isStudent = true;
// let skills = ["Html", "Css"];

// console.log(`
//     Name: ${firstName} => Age: ${age} => isStudent: ${isStudent} => Skills: ${skills}
//     `);

// console.log(Array.isArray(skills));

function getUser(name, age) {
  if (age < 18) {
    return "سایت رو ترک کن";
  }

  return `خوش آمدید ${name}`;
}

console.log(getUser("علی", 18));

function calcSum(num1, num2) {
  return num1 + num2;
}
function calcMinus(num1, num2) {
  return num1 - num2;
}
function calcMultiple(num1, num2) {
  return num1 * num2;
}
function calcDivide(num1, num2) {
  return num1 % num2;
}

console.log(calcSum(1, 2));
console.log(calcMinus(1, 2));
console.log(calcMultiple(1, 2));
console.log(calcDivide(1, 2));
