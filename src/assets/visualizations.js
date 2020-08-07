import {
  initWaterChart,
  chartZero,
  chartOne,
  chartTwo,
  chartThree,
} from '../assets/water.js';

var height;
var width;
var chartDX;
var chartDY;
import {Atom} from './atoms.js';
import {Element} from './elements.js';

var hydrogen;
var oxygen;
var hydrogenLabel;
var oxygenLabel;

var baseURL = 'https://argos.michaero.com/static/';
var imageCollection = [
  {
    id: 'main-logo',
    file: 'flowing-water.gif',
  },
  // {id: 'water-earth', file: 'water-earth.jpg'},
  {id: 'water-earth', file: 'earth-water.jpg'},
  {id: 'oceans', file: 'oceans.gif'},
  {id: 'glaciers', file: 'glaciers.jpg'},
  {id: 'rivers', file: 'river-animated.gif'},
  {id: 'iceberg', file: 'iceberg.png'},
  {id: 'plant', file: 'proteins.gif', orient: 'width'},
  {id: 'canyon', file: 'canyon.jpg'},
  {id: 'storm', file: 'storm.gif'},
  {id: 'drought', file: 'drought.jpg'},
  {id: 'flood', file: 'flood.jpg'},
  {id: 'water-strange', file: 'water-girl.gif'},
];

function moveElement(id, dx, dy, opacity) {
  if (opacity != null) {
    d3.select(`#${id}`)
      .transition()
      .duration(500)
      .attr('transform', `translate(${dx}, ${dy})`)
      .style('opacity', opacity);
  } else {
    d3.select(`#${id}`)
      .transition()
      .duration(500)
      .attr('transform', `translate(${dx}, ${dy})`);
  }
}

function initializeCanvas() {
  // Add the main logo.
  var svg = d3
    .select('#vis')
    .append('svg')
    .attr('id', 'canvas');

  let sizes = d3
    .select('#canvas')
    .node()
    .getBoundingClientRect();

  // Define canvas dimensions.
  width = sizes.width;
  height = sizes.height;

  svg
    .selectAll('image')
    .data(imageCollection)
    .enter()
    .append('image')
    .attr('id', d => {
      return d.id;
    })
    .attr('xlink:href', d => {
      return baseURL + d.file;
    })
    .style('height', d => {
      if (d.orient != 'width') {
        return '100%';
      }
    })
    .style('width', d => {
      if (d.orient == 'width') {
        return '100%';
      }
    })
    .style('opacity', 0);

  svg
    .append('circle')
    .attr('r', 1)
    .style('fill', 'black')
    .style('stroke', 'black');

  initWaterChart();
  let chart = d3.select('#water-chart');
  let chartWidth = chart.node().getBBox().width;
  let chartHeight = chart.node().getBBox().height;
  chartDX = width / 2 - chartWidth / 2;
  chartDY = (2 / 3) * height - chartHeight / 3 - 300;
  // moveElement('water-chart', chartDX, chartDY, 0)
  // moveElement('water-chart', chartDX, chartDY, 0)
  var options = {
    canvasId: 'canvas',
    atomId: 'hydrogen',
    radius: 50,
    atomicNumber: 1,
    numberNeutrons: 0,
  };
  hydrogen = new Atom(options);

  options = {
    canvasId: 'canvas',
    atomId: 'oxygen',
    radius: 100,
    atomicNumber: 8,
    numberNeutrons: 8,
  };
  oxygen = new Atom(options);

  hydrogenLabel = new Element('hydrogen');
  hydrogenLabel.hide().move(width / 2, 0);

  oxygenLabel = new Element('oxygen');
  oxygenLabel.move(width / 2, 0);

  d3.select('#canvas')
    .append('image')
    .attr('id', 'logo')
    .attr('xlink:href', baseURL + 'chronicle-logo.png')
    .attr('width', 300)
    .attr('x', width - 315)
    .attr('y', 15)
    .style('opacity', 0);
}

var storyboard = [];

storyboard.push(function() {
  moveElement('main-logo', 0, 0, 1);
  moveElement('water-earth', 0, 0, 0);
  d3.select('#logo')
    .transition()
    .delay(1000)
    .duration(500)
    .style('opacity', 1);
});

storyboard.push(function() {
  // Earth is water planet...
  d3.select('#logo').style('opacity', 0);
  moveElement('main-logo', 0, 0, 0);
  moveElement('water-earth', 0, 0, 1);
  moveElement('water-chart', chartDX, chartDY, 0);
  moveElement('oceans', 0, 0, 0);
  chartZero();
});

storyboard.push(function() {
  // About 97% of Earth's water...
  moveElement('water-earth', 0, 0, 0);
  moveElement('oceans', 0, 0, 1);
  moveElement('water-chart', chartDX, chartDY, 1);
  moveElement('glaciers', 0, 0, 0);
  chartOne();
});

storyboard.push(function() {
  // Freshwater is distributed...
  chartTwo();
  moveElement('oceans', 0, 0, 0);
  moveElement('glaciers', 0, 0, 1);
  moveElement('rivers', 0, 0, 0);
});

storyboard.push(function() {
  // As far as Earth's fresh surface...
  moveElement('glaciers', 0, 0, 0);
  moveElement('rivers', 0, 0, 1);
  moveElement('plant', 0, 0, 0);
  chartThree();
  moveElement('water-chart', chartDX, chartDY, 1);
});

storyboard.push(function() {
  // Water is essential to life.
  chartZero();
  moveElement('water-chart', chartDX, chartDY, 0);
  moveElement('plant', 0, 0, 1);
  moveElement('canyon', 0, 0, 0);
  moveElement('rivers', 0, 0, 0);
});

storyboard.push(function() {
  // Water also shapes the world...
  moveElement('plant', 0, 0, 0);
  moveElement('canyon', 0, 0, 1);
  moveElement('storm', 0, 0, 0);
});

storyboard.push(function() {
  // Water powers our weather systems
  moveElement('canyon', 0, 0, 0);
  moveElement('storm', 0, 0, 1);
  moveElement('flood', 0, 0, 0);
});

storyboard.push(function() {
  // Floods cause...
  moveElement('storm', 0, 0, 0);
  moveElement('flood', 0, 0, 1);
  moveElement('drought', 0, 0, 0);
});

storyboard.push(function() {
  // Droughts cause...
  moveElement('flood', 0, 0, 0);
  moveElement('drought', 0, 0, 1);
  moveElement('water-strange', 0, 0, 0);
  hydrogen.hide().move(width / 2, 0);
  hydrogenLabel.hide();
});

storyboard.push(function() {
  // Water is strange
  moveElement('drought', 0, 0, 0);
  moveElement('water-strange', 0, 0, 1);
  hydrogen.hide().move(width / 2, 0);
  hydrogenLabel.hide();
});

storyboard.push(function() {
  // But let's start at the beginning.
  moveElement('water-strange', 0, 0, 0);
  hydrogenLabel.show().move(width / 2, height / 3);
  hydrogen.show().move(width / 2, (2 * height) / 3);
  oxygen.hide().move((1 / 3) * width, 0);
  oxygenLabel.hide().move((2 / 3) * width, (4 / 3) * height);
});

storyboard.push(function() {
  // But let's start at the beginning.
  hydrogenLabel.show().move(width / 3, (1 / 3) * height);
  hydrogen.show().move((1 / 3) * width, (2 / 3) * height);
  oxygenLabel.show().move((2 / 3) * width, (1 / 3) * height);
  oxygen.show().move((2 / 3) * width, (2 / 3) * height);
});

storyboard.push(function() {});

function executeTransition(index) {
  return storyboard[index];
}

export {initializeCanvas, executeTransition};
