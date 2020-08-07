<template>
  <div id="graphic" class="flex">
    <div id="sections" class="w-35">
      <section class="step">
        <h1 class="white fl ml4 mr4 mt6">The Story of Water</h1>
        <h3 class="fl ml4 mb4 light-blue">By Matthew J. Lewis, Ph.D.</h3>
        <p class="fl pl4 white mr4 mt3">
          We think water is exceedingly ordinary, but it is in fact the most
          remarkable substance. We wash in it, fish in it, swim in it, drink it,
          and cook with it — although probably not all at the same time.
        </p>
      </section>

      <section class="step">
        <h2 class="white fl ml4 mr4 mt6">The Water Planet</h2>
        <p class="fl pl4 white mr4 mt3">
          Earth is the water planet, for water in its three states defines and
          sustains it. In one form or another, it covers about 71% of the
          Earth's surface.
        </p>
      </section>

      <section class="step">
        <p class="fl pl4 white mr4 mt3">
          About 97% of the Earth's water is salty, filling its vast seas and
          oceans. The remaining 3%, devoid of salt, is called freshwater.
        </p>
      </section>

      <section class="step">
        <p class="fl pl4 white mr4 mt3">
          Earth's freshwater is distributed across many geological systems. Most
          of it is locked in glacial ice and in the polar icecaps (for now), or
          is trapped as subterranean groundwater, filling subsurface cracks and
          the spaces in the Earth's soil, sand, and rock.
        </p>
      </section>

      <section class="step">
        <p class="fl pl4 white mr4 mt3">
          Only 0.3% of Earth's freshwater flows freely through its rivers and
          streams, or fills its 117 million lakes and countless swamps.
        </p>
      </section>

      <section class="step">
        <h2 class="white fl ml4 mr4 mt6">Life</h2>
        <p class="fl pl4 white mr4 mt3">
          Water is essential to life because the electrochemical processes that
          are life can only occur within it. Fluids as salty as ancient seas
          flow through our mammalian veins, and mineral-rich water rises
          hundreds of feet into the air through the conductive tissues of
          massive oaks to support their survival.
        </p>
        <p class="fl pl4 white mr4 mt3">
          Earth's oceans support a dizzying variety of organisms, including
          230,000 known species, and as many as two million more that so far
          remain a mystery.
        </p>
      </section>

      <section class="step">
        <h2 class="white fl ml4 mr4 mt6">Geology</h2>
        <p class="fl pl4 white mr4 mt3">
          Water also shapes the world around us, eroding immense mountains and
          cutting deep canyons through solid rock over the course of millions of
          years.
        </p>
        <p class="fl pl4 white mr4 mt3">
          The history of our planet is tied inextricably to the presence of
          water and its properties.
        </p>
      </section>

      <section class="step">
        <h2 class="white fl ml4 mr4 mt6">Weather</h2>
        <p class="fl pl4 white mr4 mt3">
          Water powers our weather systems, absorbing sunlight and rising, via
          evaporation, into the atmosphere before falling back to Earth as rain
          and snow.
        </p>
        <p class="fl pl4 white mr4 mt3">
          The short-term weather systems and the long-term climate have a
          significant impact on the quality of human life on Earth.
        </p>
      </section>

      <section class="step">
        <p class="fl pl4 white mr4 mt3">
          Floods cause death and disease, and can destroy infrastructure.
        </p>
      </section>

      <section class="step">
        <p class="fl pl4 white mr4 mt3">
          Droughts cause famines.
        </p>

        <p class="fl pl4 white mr4 mt3">
          And both flood and famine will increase in frequency as greenhouse
          gasses accumulate in the atmosphere and climate change accelerates.
        </p>
      </section>

      <section class="step">
        <h2 class="white fl ml4 mr4 mt6">The Importance of Water</h2>
        <p class="fl pl4 white mr4 mt3">
          Because of its importance to life, water is the most studied substance
          on Earth. And it turns out — <span>water is strange</span>. Given
          enough time, it can dissolve just about any other material. It has a
          remarkably high surface tension. And its solid state, ice, is almost
          ten percent less dense than its liquid state, which is why ice floats,
          rather than sinks, in water.
        </p>

        <p class="fl pl4 white mr4 mt3">
          In this data story, we will explore the chemistry of water to better
          understand these weird properties. We'll look at where Earth's water
          comes from. And we'll examine some of the ways NOAA scientists use
          water data to better forecast both short-term weather events like
          hurricanes as well as the long-term implications of climate change.
        </p>
      </section>

      <section class="step">
        <h2 class="white fl ml4 mr4 mt6">Chemistry</h2>
        <p class="fl pl4 white mr4 mt3">
          But let's start at the beginning. What is water made of? Where did it
          come from?
        </p>
        <p class="fl pl4 white mr4 mt3">
          Meet <b>hydrogen</b>, our oldest element, forged in the first minutes
          following the Big Bang. It is the most abundant substance in the
          Universe, comprising about 75% of observable matter.
        </p>
        <p class="fl pl4 white mr4 mt3">
          Neutral hydrogen consists of a single positively charged proton in a
          central nucleus, and a single negatively charged electron in orbit
          thereabouts.
        </p>
      </section>

      <section class="step">
        <p class="fl pl4 white mr4 mt3">
          While hydrogen is the most abundant element in the Universe, its
          compatriot <b>oxygen</b> is the most abundant on Earth, making up
          about 46% of the Earth's mass, mostly in its rocky crust.
        </p>

        <p class="fl pl4 white mr4 mt3">
          Oxygen has a nucleus consisting of eight protons and eight neutrons,
          and is surrounded, in its neutral state, by a diffuse cloud of eight
          electrons.
        </p>

        <p class="fl pl4 white mr4 mt3">
          While interesting on their own, when two hydrogen atoms and one oxygen
          atom get together, they produce that most amazing substance: water.
        </p>
      </section>

      <section class="step">
        <p class="fl pl4 white mr4 mt3">
          And more to come...
        </p>
      </section>
    </div>

    <div id="vis"></div>
  </div>
</template>

<script>
// import Component from "../component_location"
import {scroller} from '@/assets/scroller.js';
import {initializeCanvas, executeTransition} from '@/assets/visualizations.js';

export default {
  components: {},

  props: [],

  data() {
    return {};
  },

  watch: {},

  methods: {
    pause() {
      debugger;
    },
  },

  computed: {},

  mounted() {
    initializeCanvas();
    this.scroll = scroller().container(d3.select('#story'));
    this.scroll();
    let lastIndex,
      activeIndex = 0;
    this.scroll.on('active', function(index) {
      d3.selectAll('.step')
        .transition()
        .duration(500)
        .style('opacity', function(d, i) {
          return i === index ? 1 : 0.2;
        });

      executeTransition(index)();
    });
    this.scroll.on('progress', function(index, progress) {});
  },
};
</script>

<style>
a {
  color: #96ccff !important;
}

.graphic {
  flex-direction: row;
  align-items: top;
  width: 100%;
}

p {
  font-size: 1.4em;
  text-align: left;
  display: block;
}

.step {
  margin-bottom: 100px;
  height: 700px;
  font-weight: 400;
  line-height: 1.4em;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.box {
  height: 100%;
  width: 100%;
}

#sections {
  position: relative;
  display: inline-block;
  width: 35%;
  top: 0px;
  z-index: 90;
  float: left;
  background-color: #273c75;
  background-color: black;
  background-color: #2f3640;
  color: white;
}

.step {
  margin-bottom: 200px;
  padding: 15px;
}

#canvas {
  height: 100%;
  width: 100%;
}

image {
  object-fit: cover;
}

#vis {
  position: fixed;
  height: 100%;
  width: 65%;
  top: 0px;
  left: 35%;
  z-index: 1;
}

h1,
h3 {
  display: block;
}

h3 {
  margin-top: -60px;
}

span {
  color: #0097e6;
  color: #96ccff;
}

h2 {
  color: #96ccff !important;
}

text {
  stroke: black;
  fill: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

.tick > text {
  font-size: 20px;
  font-family: helvetica;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  stroke: none;
  fill: white;
  font-weight: normal;
}

.tick > line {
  stroke: white;
}

.bar {
  fill: white;
}

.line > path {
}

.element-labels {
  font-size: 25px;
}

.element-symbol {
  font-size: 145px;
}

.atomic-numbers {
  font-size: 40px;
}

.proton {
  fill: #c23616;
}

.electron {
  fill: #00a8ff;
}

.orbit {
  stroke: gray;
  fill: none;
}
</style>
