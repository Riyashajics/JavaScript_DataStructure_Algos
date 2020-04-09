

class Graph {  
constructor(n) 
{ 
    this.no = n; 
    this.AList = new Map(); 
}
    
CreateVertex(v) 
{ 
    this.AList.set(v, []); 
}

CreateEdge(v, w) 
{ 
    this.AList.get(v).push(w); 
    this.AList.get(w).push(v); 
} 

print() 
{ 
    var ks=this.AList.keys(); 
    for (var i of ks){ 
        var v=this.AList.get(i); 
        var st=""; 
  		for (var j of v) 
        	    st+=j+" "; 
   
        console.log(""+i+" -> "+st); 
    						} 
}

depthfirstsearch(x) 
{ 
    var vflag = []; 
    for (var i = 0; i < this.no; i++) 
        vflag[i] = false; 
  
    this.dfs1(x, vflag); 
} 
 
dfs1(x, vflag) 
{ 
    vflag[x] = true; 
    console.log(x+" "); 
  
    var nb = this.AList.get(x); 
    for (var i in nb) { 
        var elem = nb[i]; 
        if (!vflag[elem]) 
            this.dfs1(elem, vflag); 
    } 
} 

}

var ob = new Graph(8); 
var node = [ 'a', 'b', 'c', 'd', 'e', 'f' ,'g','h' ]; 

for (var i = 0; i < node.length; i++) { 
    ob.CreateVertex(node[i]); 
} 

ob.CreateEdge('a','b'); 
ob.CreateEdge('a','d'); 
ob.CreateEdge('b','e'); 
ob.CreateEdge('b','g');
ob.CreateEdge('b','c'); 
ob.CreateEdge('d','e'); 
ob.CreateEdge('e','f');
ob.CreateEdge('e','g');
ob.CreateEdge('e','c'); 
ob.CreateEdge('c','f');
ob.CreateEdge('h','d');

console.log("Showing the created list by adjacency matrix");
ob.print();
console.log("<br> Depth First Search <br>");
ob.depthfirstsearch('a'); 


