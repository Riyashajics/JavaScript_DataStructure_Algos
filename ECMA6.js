const name="Riya";
const age=23;
console.log(`hi my name is ${name} and i am 
${age} years old`);

//object literals
function book(title,author)
{
    return{
        title,//title:title,
        author,//author:author
    }
}
var neww= book("Harry potter","JK Rowling");
console.log(neww);

//Object deconstructor
var user={
    name:'riya',
    age:23
}
var myname=user.name;
console.log(myname);
//in ES6

const list={
    username:'shaji',
    item:['a','b','c']
}
const{username,item}=list;
console.log(username,item);

//Arrow functions
const person={
    name:'Riya',
    age:23,
    occupation:'intern',
    sayname:function(){
        console.log(`my name is ${this.nanme}`);
     const full=()=>{
         console.log(`my name is ${this.name}
         and age ${this.age}`);
     };
     full();

}
};
person.sayname();

//deafult parameters
function add(x,y){
    var a=x||1;
    var b=y||1;
    console.log(a+b);
}
add();

//In ECMA6

const addnew =(c=1,d=1)=>{
    console.log(c+d);
}
addnew(10,20);

//forEach 
const products=['A','B','C','D'];
products.forEach((product,index)=>{
console.log(`this is ${index} and the product is ${product}`); 
});

//map
const maplist=['AS','BS','CS','DS'];
const newlist= maplist.map(item=>{
    return item + "new";
});

console.log(newlist);
    

