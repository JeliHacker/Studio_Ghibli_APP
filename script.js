var peoplePromise = d3.json("people.json");

peoplePromise.then(
function(data)
    {
        makeSpread(data);
        console.log("People",data);
    },
function(err)
    {
        console.log("broke",err);
    }
)

var makeSpread = function(people)
{
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
        })
};