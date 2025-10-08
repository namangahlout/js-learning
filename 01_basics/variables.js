const accountId = 114652
let accountEmail = "naman@gmail.com"
var accountPassword = "12345"

accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "naman@tech.com"
accountPassword = "23231"
accountCity = "Prayagraj"
let accountState;

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope or function scope
don't use accountCity type of variable it's not a good practice
when you don't give the value to a variable then it value is undefined
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



