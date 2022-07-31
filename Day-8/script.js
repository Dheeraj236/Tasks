var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send()
request.onload=function(){
    var data=JSON.parse(request.response)
    console.log(data)
    var res=data.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
    
    var res=data.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
    var res=data.reduce((acc,cv)=>acc+cv.population,0)
    data.forEach(ele=>{console.log(`country: ${ele.name}capital: ${ele.capital}flag: ${ele.flag}`)})
 
     var res=data.filter((ele)=>ele.currencies[0].code==="USD").map((ele)=>ele.name)
       console.log(res)
    }