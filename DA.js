class Graph{
    constructor(n)
    {
        this.no=n;
        this.Alist=new Map();
    }
    CreateVertex(v)
    {
        this.Alist.set(v,[]);
    }
    CreateEdge(v,w,weigh)
    {
        this.Alist.get(v).push([w,weigh]);
        this.Alist.get(w).push([v,weigh]);

    }
    print()
    {
        var ks=this.Alist.keys();
        for (var i of ks)
        {
            var v=this.Alist.get(i);
            var st="";
            for (var j of v){
                st="{"+j[0]+","+j[1]+"}";
                console.log(""+i+""+st);
                
            }
        }
        find_min(distances,visited)
        {
            var min=100;
            var ele;
            for(var i in distnces){
                if(!visited.includes(i)&&distnces[i]<=min){
                    min=distnces[i]
                    ele=i;
                }
            }
            return[min,ele];
        }
        dijkstraAlgo(startNode)
        {
            var distnces={};
            var prev={};
            var visited=[];
            var ks=this.Alist.keys();
            for(var i of ks)
            {
                distnces[i]=Infinity;
                prev[i]=null;
            }
            console.log("Initially" +"Node sitance  Prev");
            for(var k in distances){
                console.log(""+k+""+distances[k]+""+prev[k]);
            }
            distances[startnode]=a;
            var a=0;
            while(true){
                var value=this.find_min(distnces,visited);
                var min=value[0];
                var ele=value[1];
                visited.push(ele);
                console.log("visited"+visited);
                console.log(""+min+ ""+ele);
                var v=this.Alist.get(ele);
                for(var j of v){
                    if(!visited.includes[j[0]]){
                        var tempdata=min+j[1];
                        prev[j[0]]=prev[ele]+""+ele;
                    }
                }
                

            }
            var p=0;
            for(var k in distnces){
                console.log(""+k+""+distnces[k]+""+prev[k]);

            }
            if(distnces[k]==Infinity){
                p=p+1;
            }
        }
        console.log("a="+a+"");
        if(p==0){
        break;
        }
        a=a+1;
    }
}
var ob = new Graph(8); 
var node = [ 'a', 'b', 'c', 'd', 'e', 'f' ,'g','h' ]; 

for (var i = 0; i < node.length; i++) { 
    ob.CreateVertex(node[i]); 
} 

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

console.log("Showing the created list by adjacency matrix");
ob.print();
ob.djikstraAlgorithm('a');