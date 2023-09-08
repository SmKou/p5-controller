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

    if (Sketch.mousePressed) {
        p.mousePressed = function () {
            Sketch.mousePressed()
        }
    }
    if (Sketch.mouseReleased) {
        p.mouseReleased = function () {
            Sketch.mouseReleased();
        }
    }
}