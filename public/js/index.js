import * as d3 from 'd3'

console.log(d3)
console.log('hello world')

window.onload = function(){
    d3.select("svg")
        .selectAll("rect")
        .data([15, 50, 22, 8, 100, 10])
        .enter()
        .append("rect")
        .attr("width", 10)
        .attr("height", function(d) {return d;})
        .style("fill", "blue")
        .style("stroke", "red")
        .style("stroke-width", "1px")
        .style("opacity", .25);
}