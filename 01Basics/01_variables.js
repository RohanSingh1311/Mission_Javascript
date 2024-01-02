const accountId = 14453
let accountEmail = "dsj@gmail.com"
var accountPassword = "abcd1234"
accountCity = "Surat"
let accountState;
//if variable is not initialised it shows 'undefined' as output while printing

// account id is constant so we cannot change it
// accountId = 2
// console.log(accountId);

accountEmail = "gghs@cvb.com"
accountPassword = "bjkasdf657"
accountCity = "Delhi"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer bnot to use var 
because of issue of block scope and functional scope so use 'let' instead of 'var'
*/
