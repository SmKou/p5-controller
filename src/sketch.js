import Settings from './state/Settings';

export const Sketch = {
    getSketch: () => ({})
}

export function sketch(p) {
    p.setup = function () {
        const { width, height } = Settings.getBox;
        p.createCanvas(width, height);
        Sketch.getSketch.settings(p);
    }
    p.draw = function () {
        p.background(255);
        Sketch.getSketch.render(p);
    }
}