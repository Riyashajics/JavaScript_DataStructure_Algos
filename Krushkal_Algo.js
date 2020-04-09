class Graph{
    constructor(n){
    this.no=n;
    this.Alist=new Map();
    this.xlist=new Array();

    }
    CreateVertex(v)
    {
        this.Alist.set(v,[]);
    }
    CreateEdge(v,w,weigh)
    {
        this.Alist.get(v).push([w,weigh]);
        this.Alist.get(w).push([v,weigh]);
        var x=new Array(weigh,v,w);
        this.xlist.push(x);


    }
    print()
    {
        var ks=this.Alist.keys();
        for(var i of ks)
        {
            var v=this.Alist.get(i);
            var str="";
            for(var j in v)
            {
                str+="{"+j[0]+","+j[1]+"}";
            }
        }
    }
}