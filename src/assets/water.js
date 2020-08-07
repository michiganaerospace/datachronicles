var chartDataZero = [
  {value: 0, label: 'Salt'},
  {value: 0, label: 'Fresh'},
];
var chartDataOne = [
  {value: 97, label: 'Saltwater'},
  {value: 3, label: 'Freshwater'},
];
var chartDataTwo = [
  {value: 68.7, label: 'Icecaps & Glaciers'},
  {value: 30.1, label: 'Ground Water'},
  {value: 0.9, label: 'Other'},
  {value: 0.3, label: 'Surface Water'},
];
var chartDataThree = [
  {value: 87, label: 'Lakes'},
  {value: 11, label: 'Swamps'},
  {value: 2, label: 'Rivers'},
];

var x;
var y;
var xAxis;
var yAxis;
var chart;
var height;
var width;

function initWaterChart() {
  var svg = d3.select('#canvas');
  chart = svg.append('g').attr('id', 'water-chart');

  height = 300;
  width = 800;

  y = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, 100]);
  x = d3
    .scaleBand()
    .range([0, width])
    .padding(0.2);

  yAxis = chart.append('g').call(d3.axisLeft(y));
  yAxis.selectAll('text').style('opacity', 0);
  yAxis.selectAll('line').style('opacity', 0);
  yAxis.selectAll('path').style('opacity', 0);

  xAxis = chart
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));
  xAxis.selectAll('path').style('stroke', 'white');

  updateChart(chartDataZero);
  chart.style('opacity', 0);
}

function updateChart(data) {
  // Set domain on x-axis.
  x.domain(
    data.map(d => {
      return d.label;
    }),
  );

  xAxis
    .transition()
    .duration(1000)
    .call(d3.axisBottom(x));

  d3.select('#water-chart')
    .selectAll('.bar')
    .transition()
    .duration(250)
    .attr('y', function(d) {
      return y(0);
    })
    .attr('height', 0);

  var bars = d3
    .select('#water-chart')
    .selectAll('.bar')
    .data(data, d => {
      return d.label;
    });
  bars.exit().remove();

  var enter = bars
    .enter()
    .append('g')
    .attr('class', 'bar');

  enter
    .append('rect')
    .attr('x', d => {
      return x(d.label);
    })
    .attr('y', function(d) {
      return y(0);
    })
    .attr('width', x.bandwidth())
    .transition()
    .duration(1000)
    .attr('y', function(d) {
      return y(d.value);
    })
    .attr('height', function(d) {
      return height - y(d.value);
    });

  enter
    .append('text')
    .attr('y', d => {
      return y(0);
    })
    .style('stroke', 'none')
    .style('fill', 'white')
    .style('font-size', '25px')
    .attr('x', d => {
      return (
        x(d.label) +
        d3
          .select('.bar')
          .node()
          .getBBox().width /
          2
      );
    })
    .transition()
    .duration(1000)
    .attr('y', d => {
      return y(d.value) - 15;
    })
    .text(d => {
      return `${d.value}%`;
    });

  bars = bars.merge(enter);
}

function chartZero() {
  updateChart(chartDataZero);
}

function chartOne() {
  updateChart(chartDataOne);
}

function chartTwo() {
  updateChart(chartDataTwo);
}

function chartThree() {
  updateChart(chartDataThree);
}

export {initWaterChart, chartZero, chartOne, chartTwo, chartThree};
