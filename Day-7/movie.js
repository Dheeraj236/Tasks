class Movie{
    
    constructor(title , studio, rating="PG"){
        this.title=title
        this.studio=studio
        this.rating=rating
    }
 
    getPG(M){
        if(this.rating==="PG"){
            return M
        }
    }
}
var M1=new Movie ("RRR", "Rajamouli" , "PG" )
var M2=new Movie ("Casino Royale", "Eon Productions" , "PG13" );
var M3=new Movie ("Jai Ho", "Sanjay-Leela"  );
var arr=[]

var M=[M1 , M2, M3]
for(var i=0;i<M.length;i++){
    if(M[i].getPG(M[i])!=undefined){
        arr.push(M[i].getPG(M[i]))        
    }
}
console.log(arr)