class Animal{
    constructor(type){
        this.type=type;
    }
    indentify(){
        console.log(this.type);
    }
}


let cat=new Animal('cat');
cat.indentify();