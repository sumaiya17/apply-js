
function isLeapYear (year){
const remainder = year % 4;
if (remainder == 0){
   return true;
}
else{
   return false;
}
}
const chack2021 =  isLeapYear (2021);
console.log(true);
