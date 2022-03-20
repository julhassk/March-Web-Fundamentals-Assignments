/*****************************************************************
 *  Question 1 : Program to write the first 10 numbers.
 *****************************************************************/

function firstTenDigit() {
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
}

firstTenDigit();

/*****************************************************************
 * Question 2 : Program to calculate the sum of first 10 numbers.
 *****************************************************************/

function sumNuber() {
  s = 0;
  for (i = 1; i <= 10; i++) {
    s = s + i;
  }
  console.log(s);
}

sumNuber();

/*****************************************************************
 * Question 3 : Make the loop stop when i is 5.
 *****************************************************************/

function loopBreak() {
  for (i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
      break;
    }
  }
}

loopBreak();

/***************************************************************************
 * Question 4 : Write a program to print day of week name using switch case.
 ***************************************************************************/
var day = 4;
switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day = "Wrong Key Enter";
}
console.log(day);

/****************************************************************************************
 * Question 5 : Write a program print total number of days in a month using switch case.
 ****************************************************************************************/

let year = 2016;
let month = 2;
let dayCount;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1;
}
console.log(dayCount);
