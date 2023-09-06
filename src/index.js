import './assets/css/fonts.css'
import './assets/css/styles.css'

import { setBox, getBox } from './state/Settings'
import { sketch, Sketch } from './sketch'
import p5 from 'p5';

import Web from './components/Web'

const sketches = new Map();
sketches.set("Web", Web)

const container = document.getElementById('app');
getBox = setBox(container.clientWidth, container.clientHeight);
new p5(sketch, container);

const dropdown = document.getElementById('dropdown');
dropdown.addEventListener('change', e => {
    const sketch_name = e.target.value;
    Sketch.getSketch = sketches.get(sketch_name);
    Sketch.reset();
})