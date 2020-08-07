<template>
  <div id="graphic">
    <div id="sections">
      <section class="step">
        Here is my content.
      </section>
      <section class="step"></section>
    </div>
    <div id="vis">
      <!-- <svg id='canvas' style='width: 100%; height: 100%'></svg> -->
    </div>
  </div>
</template>

<script>
// import Component from "../component_location"
import {drawChart} from "@/assets/water.js"

export default {
  components: {},

  props: [],

  data() {
    return {};
  },

  watch: {},

  methods: {},

  computed: {},

  mounted() {
  },
};
</script>

<style scoped>
body {
  background-color: rgb(245, 244, 241);
  overflow-x: hidden;
}

#sections {
  position: relative;
  display: inline-block;
  width: 400px;
  top: 60px;
  z-index: 90;
  margin-right: 50px;
}

.categoryLegend {
}

.step {
  margin-bottom: 100px;
  height: 700px;
  font-weight: 400;
  line-height: 1.4em;
  text-align: left;
  /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
}

h1,
h2 {
  font-weight: 700;
  text-align: right;
  line-height: 32px;
}

h1 {
  font-size: 35px;
}

strong {
  color: rgb(245, 155, 155);
}

#graphic {
  margin: auto;
  width: 1500px;
  flex-direction: row;
  align-items: top;
  justify-content: space-around;
}

#vis {
  display: inline-block;
  position: fixed;
  top: 0px;
  z-index: 1;
  margin-left: 0;
  height: 1000px;
  width: 1000px;
}

.tick line {
  stroke: 'red';
}

#tooltip {
  position: absolute;
  display: none;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  box-shadow: -3px 3px 15px #939393;
  color: white;
  padding: 6px;
  font-size: 1.1em;
  max-width: 400px;
  z-index: 100;
}

svg circle:hover {
  cursor: pointer;
}

.swatch {
  fill: #939393;
}

.sizeLegend2 {
  opacity: 0.7;
}

a {
  color: rgb(221, 0, 255);
  text-decoration: none;
}

img {
}

text {
  stroke: black;
  fill: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
</style>
