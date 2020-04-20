// functions

let numbers=[4,2,6];
numbers.sort(function(a,b)
{
    return b-a;
});
console.log(numbers);

//Arrow Function
let number=[4,2,6];
number.sort((a,b)=>{
    b-a
})

//map function
let names=['A','B','C','D'];
let lengths=names.map(name=>name.length);
console.log(lengths);

//arrow functions and object literal

let setcolor=function(color){
    return{
        value:color
    }
};
let backgroundColor= setcolor('blue');
console.log(backgroundColor.value);



