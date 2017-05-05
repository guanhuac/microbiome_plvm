
var width = 600;
var height = 300;

var elem = d3.select("body")
  .append("svg")
  .attrs({
    "width": width,
    "height": height
  })

elem.append("rect")
  .attrs({
    "width": width,
    "height": height,
    "fill": "#F7F7F7"
  });

var unique_fill = d3.set(beta.map(function(x) { return x.fill; })).values();
var unique_ix = d3.set(beta.map(function(x) { return x.ix; })).values();

var scales = {
  "fill": d3.scaleOrdinal()
    .domain(unique_fill)
    .range(['#66c2a5','#fc8d62','#8da0cb','#e78ac3']),
  "y": d3.scaleLinear()
    .domain(d3.extent(beta.map(function(x) { return x.median; })))
    .range([height, 0]),
  "x": d3.scaleLinear()
    .domain(d3.extent(unique_ix))
    .range([0, width])
};

elem.selectAll("circle")
  .data(beta)
  .enter()
  .append("circle")
  .attrs({
    "r": 1,
    "cx": function(d) { return scales.x(d.ix); },
    "cy": function(d) { return scales.y(d.median); },
    "fill": function(d) { return scales.fill(d.fill); }
  });
