

class Queue 
{ 
    constructor() 
    { 
        this.items = []; 
    } 
    
    enq(x) 
	{      
    this.items.push(x); 
	}
    
    deq() 
	{  
    if(this.isEmpty()) 
        return "No more element"; 
    return this.items.shift(); 
	}
    
    isEmpty() 
	{ 
    	if(this.items.length == 0){
    	return true;
        }
        else{
        return false;
        }
	}
    

} 



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
   
        console.log(""+i+" -> "+st+""); 
    						} 
}


breadthfirstsearch(startingNode) 
{ 
    var visited = []; 
    for (var i = 0; i < this.noOfVertices; i++) 
        visited[i] = false; 
  
    var q = new Queue(); 
  
    visited[startingNode] = true; 
    q.enq(startingNode); 
  
    while (!q.isEmpty()) { 
       var getQueueElement = q.deq(); 
        console.log(getQueueElement+"  "); 
        var get_List = this.AList.get(getQueueElement);  
        for (var i in get_List) { 
            var nb = get_List[i]; 
  
            if (!visited[nb]) { 
                visited[nb] = true; 
                q.enq(nb); 
            } 
        } 
    } 
} 


}

var ob = new Graph(8); 
var node = [ 'a', 'b', 'c', 'd', 'e', 'f' ,'g','h']; 

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
console.log(" Breadth First Search ");
ob.breadthfirstsearch('a'); 


