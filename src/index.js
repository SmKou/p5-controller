import './css/fonts.css';
import './css/styles.css';

import p5 from 'p5';
import { setApp, sketch } from './sketch';

// Refer variables from .env => ${process.env.varName}

const container = document.getElementById('app');
setApp(500, 500);
new p5(sketch, container);

const dropdown = document.getElementById('dropdown');
