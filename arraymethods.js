var alphas=["aa","bb","cc","dd"];
var string="";
var string=alphas.toString();//converting an array to string
console.log(string);
var string=alphas.join("*");// we can specify the seperator
console.log(string);
var string=alphas.pop();// pop is ued to remove the last element
console.log(string);
alphas.push("new");// push is used to add a new element at the last
console.log(alphas);
var string=alphas.shift();// shift is ued to remove first element at first
console.log(string);
alphas.unshift("first");
console.log(alphas);//unshift is used to add first element
alphas.splice(3,1,"3rd","4th");// splice removes the element and adds new 
console.log(alphas);

