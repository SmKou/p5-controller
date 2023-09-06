import './assets/css/fonts.css';
import './assets/css/styles.css';

import p5 from 'p5';
import { setApp, sketch } from './sketch';

const sketches = new Map();
sketches.set()

const container = document.getElementById('app');
setApp(500, 500);
new p5(sketch, container);

const dropdown = document.getElementById('dropdown');
