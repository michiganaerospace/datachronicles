const elements = {
  hydrogen: {name: 'HYDROGEN', symbol: 'H', atomicNumber: 1},
  oxygen: {name: 'OXYGEN', symbol: 'O', atomicNumber: 8},
};

function Element(elementName) {
  var details = elements[elementName];
  var label = d3
    .select('#canvas')
    .append('g')
    .attr('id', `{details.name}-label`)
    .style('opacity', 0);

  label
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 150)
    .attr('height', 200)
    .attr('stroke', 'black')
    .attr('stroke-width', 6);

  label
    .append('text')
    .attr('x', 25)
    .attr('y', 150)
    .attr('class', 'element-symbol')
    .text(details.symbol)
    .style('font-size', '145px');

  label
    .append('text')
    .attr('x', 5)
    .attr('y', 35)
    .attr('class', 'atomic-numbers')
    .text(details.atomicNumber);

  var elementName = label
    .append('text')
    .attr('class', 'element-labels')
    .text(details.name)
    .style('font-size', '25px')
    .attr('y', 185);

  this.label = label;
  this.width = this.label.node().getBBox().width;
  this.height = this.label.node().getBBox().height;

  elementName.attr('x', (this.width - elementName.node().getBBox().width) / 2);

  return this;
}

Element.prototype.show = function() {
  this.label.style('opacity', 1);
  return this;
};

Element.prototype.hide = function() {
  this.label.style('opacity', 0);
  return this;
};

Element.prototype.move = function(x, y, duration = 500) {
  x = x - this.width / 2;
  y = y - this.height / 2;
  this.label
    .transition()
    .duration(duration)
    .attr('transform', `translate(${x}, ${y})`);
  return this;
};

export {Element};
