class Graph{
    constructor(n)
    {
        this.n0=n;
        this.vertex=new Array();
        this.edges=new Array();
    }
    CreateEdge(v,w,weigh)
    {
        if(!this.vertex.includes(v)){this.vertex.push(v); }
        if(!this.vertex.includes(w)){this.vertex.push(w);}
        this.edges.push([v,w,weigh]);
    }
    print()
    {
        var ts="";
        for(var i of this.vertex){
            ts+=i+ "";
        }
        var st="";
        for(var i of this.edges){
         st+="{"+i[0]+","+
        i[1]+""+i[2]+"}";
        }
        console.log("the vertices are"+ts);
        console.log("the vertices are"+st);

    }
    gett(a,key){
        for(var x of a)
        {
            if(x[0]==key){
                return x[1];
            }
        }
    }
    sett(a,key,value){
        for(var x of a)
        {
            if(x[0]==key){
                x[1]=value;
            }

        }
        return a;
    }
    bellmanford(a){
        var distance=[];
        for(var i of this.vertex){
            distance.push([i,Infinity]);
        }
        console.log("showimg distnace array");
        this.printDist(distance);
    
    distance=this.sett(distance,a,0);
    console.log("after setting zero");
    for(var n=1;n<this.node;n++)
    {
        for(var x of this.edges)
        {
            var u=x[0];
            var v=x[1];
            var w=x[2];
            if(this.gett(distnace,u)!=Infinity&&this.gett(distance,u)+w <this.gett(distance,v));
            var val=this.gett(distance,u)+w;
            distance=this.sett(distance,v,val);

        }
    }
        this.printDist(distance);
    }
    printDist(x){
        console.log("vertex : distance");
        for(var a of x)
        {
            console.log(a[0]+""+a[1]);
        }
    } 



}
var ob=new Graph(8);
ob.CreateEdge(0, 1, -1) 
ob.CreateEdge(0, 2, 4) 
ob.CreateEdge(1, 2, 3) 
ob.CreateEdge(1, 3, 2) 
ob.CreateEdge(1, 4, 2) 
ob.CreateEdge(3, 2, 5) 
ob.CreateEdge(3, 1, 1) 
ob.CreateEdge(4, 3, -3)
console.log("showing the graph");
ob.print();
ob.bellmanford(0);


