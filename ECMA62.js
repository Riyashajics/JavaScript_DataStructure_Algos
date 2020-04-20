// filter

const list=['A','B','C'];

const filterlist=list.filter(item=>{
    return item==="C";
});

console.log(filterlist);

//Constructor function
  function Person(name,age){
      this.name=name;
      this.age=age;

  }
  Person.prototype.sayname=function(){
      console.log('hello'+ this.name);
  }
  
  function R(occu,hobby,name,age){
      Person.call(this,name,age);
      this.occu=occu;
      this.hobby=hobby;
  }

const s=new R('riya','sketch','c',23);
