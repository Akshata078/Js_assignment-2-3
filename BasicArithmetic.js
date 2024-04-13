// 1. Given length and breadth of a rectangle, return the area of the rectangle.
// function areaofReactangle(length, breadth){
//     let area = length * breadth;
//     console.log(`The area of rectangle is ${area}`);
// }
// areaofReactangle(2,5);


// 2. Take a number and print the square of the number.
// function squareofNumber(num){
//     let square = num * num;
//     console.log(`Square of ${num} is : ${square}`);
// }
// squareofNumber(5);


// 3. Take two numbers and only print the integer part when a is divided by b.
// function integerPart(num1, num2){
//    let integerPart = Math.floor(num1/num2);
//    console.log(`Integer part is : ${integerPart}`);
// }
// integerPart(16, 6);


// 4. Take a number and print out the last digit of the number.
// function lastDigit(number){
//     let lastDigit = number % 10;
//     console.log(`Last digit of ${number} is : ${lastDigit}`);
// }
// lastDigit(1234);


// 5. Take a number and find the cube of that number.
// function cubeofNumber(num) {
//     let cube = num * num * num;
//     console.log(`Cube of ${num} is : ${cube}`);
// }
// cubeofNumber(2);


// 6. Take a 3 digit number and print the reverse of that number. Ex - 235 = 532
// function reverseNumber(num) {
//     let number = num;
//     let reverse = 0;
//     while (num > 0){
//         let remainder = num % 10;
//         reverse = reverse * 10 + remainder;
//         num = Math.floor(num/10);
//     }
//     console.log(`The reverse number of ${number} is : ${reverse}`);
// }
// reverseNumber(678);


// 7. Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7
// function firstDigit(num){
//     let number = num;
//     while (num >= 10){
//         num = Math.floor(num/10);
//     }
//     console.log(`First digit of number ${number} is : ${num}`);

// }
// firstDigit(789);



// 8. Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7
// function sumofFistandLastDigit(num) {
//     let number = num;
//     while (num >= 10){
//         num = Math.floor(num/10);
//       }
//       let firstDigit = num;
//       let lastDigit = number % 10;
//       let sum = firstDigit + lastDigit;
//       console.log(`Sum of first and last digit of a number ${number} is : ${sum}`);   
// }
// sumofFistandLastDigit(425);



// 9. Take salary of five employees and print the average salary of all the employees.
// function averageSalary(salary1,salary2, salary3, salary4, salary5) {
//     let average = (salary1 + salary2 + salary3 + salary4 + salary5) / 5;
//     console.log(`Average salary of five employees : ${average}`);
// }
// averageSalary(5,5,5,5,5);



// 10. Take two numbers and swap them. Ex - a = 10, b=5; => a=5, b=10;
// function swapNumber(num1, num2) {
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;
//     console.log(`num1 : ${num1} and num2 : ${num2}`);
// }
// swapNumber(10, 5);
