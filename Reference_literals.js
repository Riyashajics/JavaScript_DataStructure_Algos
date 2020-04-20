//Object Literals
var student={
    name:"Riya",
    marks:80,


}
var s1=new Object();
s1.name="Shaji";
s1.marks=50;

console.log(student.name);
console.log(s1.name);


//Array Literals

var names=['A','B','C'];
var names2= new Array('D','E','F');

console.log(names[1]);

console.log(names2[1]);

//Function Literals

var myFunc=new Function(console.log("hi"));



function hello(name){
    return "HI"+name;
}
console.log(hello("A"));

//RegEx literals
var regEx=new RegExp("\\d+")
var regex=/\d+/;

