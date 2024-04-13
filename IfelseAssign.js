// 1. Write a program that checks if a given number is even or odd.
function evenOdd(num){
    if (num % 2 == 0){
        console.log(`${num} is a even number.`);
    }
    else{
        console.log(`${num} is a odd number.`);
    }

}
evenOdd(7);



// 2. Create a function that takes two numbers as parameters and returns the larger one.
function largestNumber(num1,num2){
    if (num1 > num2){
        console.log(`The larger number is ${num1}`);
    }
    else {
        console.log(`The larger number is ${num2}`);
    }

}
largestNumber(6,8);



// 3. Write a function that determines if a given year is a leap year.
function leapYear(year) {
    if (year % 4 == 0){
        console.log(`${year} is a leap year.`);
    }
    else{
        console.log(`${year} is not a leap year.`);
    }
}
leapYear(2024);



// 4. Implement a program that checks whether a given character is a vowel or consonant.
function vowelOrConsonent(character) {
    if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u' ){
        console.log(`The given character is vowel`);
    }
    else{
        console.log(`The given character is consonent`);
    }
}
vowelOrConsonent('b');



// 5. Create a function that takes three numbers as input and returns the largest among them.
function largerNumber(num1,num2,num3) {
    if (num1 > num2 && num1 > num3){
        console.log(`${num1} is the largest number.`);
    }
    else if (num2 > num1 && num2 > num3){
        console.log(`${num2} is the largest number.`);
    }
    else{
        console.log(`${num3} is the largest number.`);
    }
}
largerNumber(8,4,12);



// 6. Write a program that checks if a given number is positive, negative, or zero.
function NumberPositiveNegativeZero(number) {
    if (number < 0){
        console.log(`${number} is a negative number.`);
    }
    else if (number == 0){
        console.log(`${number} : The number is zero.`);
    }
    else {
        console.log(`${number} is a positive number.`);
    }
}
NumberPositiveNegativeZero(-4);


// 7. Implement a function that calculates the grade of a student based on their score.
function gradeOfStudent(studentScore) {
    if (studentScore > 90 && studentScore <= 100){
        console.log(`A grade`);
    }
    else if (studentScore >= 75 && studentScore < 90){
        console.log(`B grade`);
    }
    else if (studentScore >= 50 && studentScore < 75){
        console.log(`C grade`);
    }
    else {
        console.log(`D grade`);
    }
}
gradeOfStudent(50);



// 8. Create a program that determines if a given string is a palindrome.
function stringPalindrome(string){
    let stringLength = string.length;
    let start = 0;
    let end = stringLength - 1;
    while (start<end){
        if(string[start] !== string [end]){
            console.log(`${string} is not a palindrome.`);
            return;
        }
        start++;
        end--;
    }
    console.log(`${string} is palindrome.`);
        
}
stringPalindrome("akshata");



// 9. Write a function that checks whether a person is eligible to vote based on their age.
function eligibleToVote(age) {
    if (age>=18){
        console.log(`eligible to vote.`);
    }
    else {
        console.log(`not eligible to vote.`);
    }
}
eligibleToVote(17);



// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
function typeOfTriangle(side1, side2, side3) {
    if ((side1 + side2 > side3) || (side1 + side3 > side2) || (side3 + side2 > side1)){
        if (side1 == side2 && side2 == side3){
            console.log(`Equilateral triangle.`);
        }
        else if (side1 != side2  && side2 != side3){
            console.log(`scalene triangle.`);
        }
        else if ((side1==side2) || (side1==side3) || (side2==side3)){
            console.log(`isoscalus triangle.`);
        }
        else if (((side1*side1) + (side2*side2)==(side3*side3)) || ((side1*side1) + (side3*side3)==(side2*side2)) || ((side2*side2) + (side3*side3)==(side1*side1))){
            console.log(`right angled triangle.`);
        }
        else {
            console.log(`invalid`);
        }
    }
    else{
        console.log(`not a side of triangle`);
    }
}
typeOfTriangle(1,1,2);
