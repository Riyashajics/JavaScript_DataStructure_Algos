


class Graph {  

constructor(n) 
{ 
    this.no = n;  //contains number of nodes in the graph
    this.vertex=new Array(); //contains all the vertex in the graph
    this.edges=new Array();  //contains all the ages in the graph
}

CreateEdge(v, w, weig) 
{ 
	if(!this.vertex.includes(v)){ this.vertex.push(v); }
    if(!this.vertex.includes(w)){ this.vertex.push(w); }
    this.edges.push([v,w,weig]);
}  //end of CreateEdge

print() 
{  
var ts="";  //contains name of all the vertex
	for(var i of this.vertex){
		ts+=i+" ";
							}
 var st="";  //contains name of all the edges
    for (var i of this.edges){
  		st+="{"+i[0]+","+i[1]+","+i[2]+"}";
   }
   	document.write("All the vertices in the Graph<br>"+ts+"<br>");
    document.write("All the edges in the Graph<br>"+st+"<br>");
}  //end of print


//this function gives the result as distance for a particular node which is
// the variable 'key'
gett(a,key){
for(var x of a){
if(x[0]==key){ 
return x[1];
}
}
}

// this function makes changes in the distance array for node value 'key'
// and makes its value as 'val
sett(a,key,val){
for(var x of a){
if(x[0]==key){
x[1]=val;
}
}
return a;
}


//this is where bellman ford algorithm is being implemented......
bellmanford(a){

// this array contains the distance of each node from the starting node 
// denoted by variable 'a'
var distance=[];

//for each node we assigning a distance as Infinty
for(var i of this.vertex){
distance.push([i,Infinity]);
}

document.write("Showing distance array:<br>");
this.printDist(distance);

//here we are setting the distance for node in variable a as 0
distance=this.sett(distance,a,0);
document.write("<br>After setting zero<br>");
this.printDist(distance);



for(var n=1;n<this.no;n++){
 for(var x of this.edges){
 	var u=x[0];
    var v=x[1];
    var w=x[2];
    //document.write("<br>For u,v,w :"+u+", "+v+", "+w);
    //document.write("Distance :"+distance);
    if(this.gett(distance,u)!=Infinity && this.gett(distance,u)+w<this.gett(distance,v)){
    	var val=this.gett(distance,u)+w;
        distance=this.sett(distance,v,val);
    
    }
}
}

this.printDist(distance);

}  //end of bellmanford

printDist(x){
document.write("<br>Vertex : Distance <br>");
for(var a of x){
document.write(a[0]+"  :  "+a[1]+"<br>");
}

} //end of printDist


} //end of class Graph


var ob = new Graph(8); 

//Example ---1

/*
ob.CreateEdge(0, 1, -1) 
ob.CreateEdge(0, 2, 4) 
ob.CreateEdge(1, 2, 3) 
ob.CreateEdge(1, 3, 2) 
ob.CreateEdge(1, 4, 2) 
ob.CreateEdge(3, 2, 5) 
ob.CreateEdge(3, 1, 1) 
ob.CreateEdge(4, 3, -3)
*/


//Example ---2

ob.CreateEdge('a','b',10); 
ob.CreateEdge('a','d',9); 
ob.CreateEdge('b','e',2); 
ob.CreateEdge('b','g',1);
ob.CreateEdge('b','c',18); 
ob.CreateEdge('d','e',5); 
ob.CreateEdge('e','f',9);
ob.CreateEdge('e','g',4);
ob.CreateEdge('e','c',17); 
ob.CreateEdge('c','f',6);
ob.CreateEdge('h','d',12);

document.write("Showing the graph<br>");
ob.print();

//ob.bellmanford(0);  //for exapmple 1
ob.bellmanford('a');  // for example 2

