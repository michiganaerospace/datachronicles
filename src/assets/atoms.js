// Standard Normal variate using Box-Muller transform.
function random(amplitude = 1) {
  return 2 * amplitude * (Math.random() - 0.5);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function Atom(options) {
  this.currentX = 0;
  this.currentY = 0;
  this.opts = options;
  d3.select(`#${options.atomId}`).remove();
  var atom = d3
    .select(`#${options.canvasId}`)
    .append('g')
    .attr('id', options.atomId)
    .style('opacity', 0);
  this.atom = atom;
  this.drawAtom();
  return this;
}

Atom.prototype.drawAtom = function() {
  console.log('Working!');
  var protons = [];
  var electrons = [];
  var neutrons = [];
  var opts = this.opts;
  var dr = opts.radius / opts.atomicNumber;
  for (let k = 0; k < opts.atomicNumber; k++) {
    protons.push({cx: random(4), cy: random(4), type: 'proton'});
    electrons.push({
      phi: random(3.141592),
      r: (k + 1) * dr,
      type: 'electron',
    });
  }
  for (let k = 0; k < opts.numberNeutrons; k++) {
    neutrons.push({cx: random(4), cy: random(4), type: 'neutron'});
  }
  protons[0].cx = 0;
  protons[0].cy = 0;
  var nucleons = protons.concat(neutrons);
  shuffle(nucleons);

  this.atom
    .selectAll('circle.proton')
    .data(nucleons)
    .enter()
    .append('circle')
    .attr('class', d => {
      return d.type;
    })
    .attr('cx', d => {
      return d.cx;
    })
    .attr('cy', d => {
      return d.cy;
    })
    .attr('r', 3)
    .style('fill', d => {
      console.log(d.type);
      return d.type === 'proton' ? '#c23616' : 'black';
    });

  this.atom
    .selectAll('circle.orbit')
    .data(electrons)
    .enter()
    .append('circle')
    .attr('class', 'orbit')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', d => {
      return d.r;
    })
    .style('fill', 'none')
    .style('stroke', 'gray')
    .style('opacity', 0.2);

  this.atom
    .selectAll('circle.electron')
    .data(electrons)
    .enter()
    .append('circle')
    .attr('class', 'electron')
    .attr('cx', d => {
      return d.r * Math.cos(d.phi);
    })
    .attr('cy', d => {
      return d.r * Math.sin(d.phi);
    })
    .attr('r', 2)
    .style('fill', '#00a8ff');

  var start = Date.now();
  d3.timer(function() {
    let delta = Date.now() - start;
    d3.selectAll('.electron').attr('transform', () => {
      return `rotate(${(delta * 15) / 200})`;
    });
  });
  return this;
};

Atom.prototype.move = function(x, y, duration = 500) {
  this.atom
    .transition()
    .duration(duration)
    .attr('transform', `translate(${x}, ${y})`);
  return this;
};

Atom.prototype.show = function() {
  this.atom.style('opacity', 1);
  return this;
};

Atom.prototype.hide = function() {
  this.atom.style('opacity', 0);
  return this;
};

export {Atom};
