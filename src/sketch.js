import { setScope, Web } from './js/Web';

const app = {
    width: 0,
    height: 0,
    max_webs: 4,
    webs: [],
    max_count: 30,
    counter: 0,
    test_render: true
};

export function setApp(width, height) {
    app.width = width;
    app.height = height;
}

export function sketch(p) {
    p.setup = function () {
        p.frameRate(30);
        p.colorMode(p.RGB, 255, 255, 255, 1);
        p.createCanvas(app.width, app.height);
        setScope(app.width, app.height);
    }

    p.draw = function () {
        if (app.test_render)
            render(p);
    }
}

function render(p) {
    p.background(255);
    if (app.counter == 0)
        app.webs.push(new Web(app.webs.length + 1));
    app.counter++;

    for (const web of app.webs)
        web.render(p);

    if (app.webs[0].lifespan < 0) {
        app.webs.shift();
        app.counter = 0;
    }

    if (app.counter == app.max_count
        && app.webs.length != app.max_webs)
        app.counter = 0;
}