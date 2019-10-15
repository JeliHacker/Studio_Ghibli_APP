var peoplePromise = d3.json("people.json");

peoplePromise.then(
function(data)
    {
        makeSpread(data);
        console.log("People", data);
    },
function(err)
    {
        console.log("broke", err);
    }
)

var makeSpread = function(people)
{
    var table = d3.select("#faces").append("table")
    
    var rows = table.selectAll("tr")
        .data(people)
        .enter()
        .append("tr")
    
        rows.append("td")
        .text(function(d)
             {return d.name;})
    
        .on("mouseover",function(d)
        {
          clearInfo()
          console.log("works up to this point buddy")
          return peopleInfo(d)
        })
  
};

var clearInfo = function(){
    d3.selectAll("#test *").remove()
}

var clearNameTest = function(){
    d3.selectAll("#nameswag *").remove()
}

var peopleInfo = function(datas)
{
    var info = d3.select("#test").attr("style", "border: 1px solid black")
        info.append("p").text("Click name for information").attr("id", "instructions").attr("style", "font-size: 12px")
        info.append("p").text("Name: " + datas.name).attr("id", "nameswag").on("click",function(d){
            //clearNameTest()
            console.log("you a straight baller")
            info.append("p").text("ID: " + datas.id)
        })
        info.append("p").text("Gender: " + datas.gender)
        info.append("p").text("Age: " + datas.age)
        info.append("p").text("Eye-Color: " + datas.eye_color)
        info.append("p").text("Hair-Color: " + datas.hair_color)        
}





//started 9:10 pm
//






    /*
    d3.select("#faces")
        .selectAll("div")
        .data(people)
        .enter()
        .append("div")
        .text(function(d)
             {return d.name;})
        .on("click",function(d)
        {
            alert(d.name + " works")
        })*/