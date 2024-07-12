const accountId = 78612
let accountEmail= "nazim.nn459@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
console.log(accountId,accountEmail,accountPassword,accountCity);
// accountId = 887227 // we can't this because constant never will change  
accountEmail = "mnk123@gmail.com"
accountPassword = "82727";
accountCity= "delhi"
console.log(accountEmail,accountPassword,accountCity);
console.table([accountEmail,accountPassword,accountCity])// its new for me and amazing create a table nice view 
let accountState;
console.log(accountState);
/*
Prefer do not use var ..

*/

/*
1. let and const are two new methods for declaring variable in js
that were added in ES6. The var keyword was the sole way to declare variable prior to this introduction.

2.var is least strict of three, allowing reassigning values to the variable. This declaration can lead to unexpected results and is generally considered bad practice ,so it is rarely used.

3.let and const are more strict then var. Variables declared using let can be re assigned values similer to the var declarations.

4.const is the most strict of the three . When a variable is declared with const , it cannot be reassigned to new value. this prevents accidental reassignments and makes the code more predictabe.
*/