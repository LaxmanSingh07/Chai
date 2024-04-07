const accountId = 144533; 
let accountEmail='total@gmail.com';
var acPass="1234";
accountCity='Door'; // it is not a good pratcie 
let accountState;


// accountId=2; // not allowed
accountEmail="hngchai@gmail.com";
acPass="23534";
accountCity="Good";

console.log(accountId);

/*
Prefere not to use var 
because of issue in the block and the funciton scope
*/

console.table([accountId,accountEmail,acPass,accountCity]);
console.log(accountState);