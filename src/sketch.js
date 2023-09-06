import { getBox } from './state/Settings';
const getSketch = () => { }
let reset;

export function sketch(p) {
    p.setup = function () {
        p.createCanvas(getBox().width, getBox().height);
        getSketch.settings(p);
    }
    p.draw = function () {
        p.background(255);
        getSketch.render(p);
    }
    reset = p.reset();
}

export const Sketch = {
    reset,
    getSketch
}