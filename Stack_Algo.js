var stack=function(){
    this.n=0;
    this.arr=[];
    this.push=function(value){
        this.arr[this.n]=value;
        this.n++;
    }

    this.pop=function(){
        if(this.n==0){
            return undefined;
        }
      
        this.n--;
        var value=this.arr[this.n];
        delete this.arr[this.n];
       
        return value;
    }
    this.peek=function(){
        return this.arr[n];
    }
}
var obj=new stack();
obj.push("1");
obj.push("2");
obj.push("3");
obj.push("4");
obj.push("5");
obj.pop();
console.log(obj.arr);