import './assets/css/fonts.css'
import './assets/css/styles.css'

import Settings from './state/Settings'
import { sketch, Sketch } from './sketch'
import p5 from 'p5';

import Web from './components/Web'

const sketches = new Map();
sketches.set("Web", Web)

const container = document.getElementById('app');
Settings.setBox(container.clientWidth)(container.clientHeight);

const dropdown = document.getElementById('dropdown');
dropdown.addEventListener('change', e => {
    const sketch_name = e.target.value;
    if (!sketch_name) {
        container.innerHTML = null;
        return;
    }
    Sketch.getSketch = sketches.get(sketch_name);
    new p5(sketch, container);
})