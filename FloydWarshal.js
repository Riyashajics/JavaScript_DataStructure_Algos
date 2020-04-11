
//Floyd Warshall Algorithim


function floydAlogo(graph){

var n=graph.length;
//creating a new matrix of same dimension as of matrix 'graph'
var d=new Array(n);
for(var i=0;i<n;i++){
d[i]=new Array(n);
}

//initialising the matrix 'd' with same value as matrix 'graph'
for(var i=0;i<n;i++){
for(var j=0;j<n;j++){
d[i][j]=graph[i][j];
}
}

//now we will work on the matrix 'd'...
for(var k=0;k<n;k++){
	for(var i=0;i<n;i++){
    	for(var j=0;j<n;j++){
        	if(d[i][k]+d[k][j]<d[i][j]){
            //document.write("<br> i:"+i+" j:"+j+" k:"+k+"<br>");
            d[i][j]=d[i][k]+d[k][j];
            }
         }
     }
 }
document.write("<br><b>After running the Floyd Warshal Algorithm Output Matrix :</b><br><br>");
print(d);
} //end of floydAlgo


//this function prints the whatever there is in the graph--> adjacency matrix
function print(graph){
for(var i=0;i<graph.length;i++){
for(var j=0;j<graph[i].length;j++){
if(graph[i][j]==Infinity){ document.write("_ ");}
else{ document.write(graph[i][j]+"  "); }
}
document.write("<br>");
}

}// end of print

//let number of vertices in the graph be 4
var n=4;

//we create a adjacency matrix containing four vertices
//diagonal element are 0 as indicates there is no self edge 
//Infiniy implies there is no edge between the two vertices
gf=[[0,8,Infinity,6],
	   [Infinity,0,3,Infinity],
       [Infinity,Infinity,0,1],
       [Infinity,Infinity,Infinity,0]]

document.write("<b>The Original Input matrix :</b> <br><br>");
print(gf);
document.write("<br><b> Running the Floyd Warshall Algorithm...</b><br><br>");
floydAlogo(gf);


/*
var dict={};
dict['one']=21;
dict['two']=23;

for(var k in dict){
document.write(dict[k]+"  "+k);
}
document.write(dict['one']);
*/


