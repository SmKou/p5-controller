import Settings from '../state/Settings'
import Vector from '../structs/vector'

/* Note:
Set target point
Calculate magnitude and projection
Shift each web point to target point over 10 cycles
*/

const web = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
}

const settings = (p) => {
    p.frameRate(10);
    p.colorMode(p.RGB, 255, 255, 255, 1);
    create();
}

const color = () => [Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random()]

const create = () => {
    const { width, height } = Settings.getBox;
    const { vector } = Vector;
    web.top = vector(Math.random() * width, Math.random() * height / 2);
    web.left = vector(Math.random() * width / 2, Math.random() * height);
    web.right = vector((width / 2) + Math.random() * width / 2, Math.random() * height);
    web.bottom = vector(Math.random() * width, (height / 2) + Math.random() * height / 2);
}

const move = () => {
    const { width, height } = Settings.getBox;
    const lowerY = web.left.y < web.right.y ? web.left.y : web.right.y;
    const higherY = lowerY === web.left.y ? web.right.y : web.left.y;
    const lowerX = web.top.x < web.bottom.x ? web.top.x : web.bottom.x;
    const higherX = lowerX === web.top.x ? web.bottom.x : web.top.x;

    const { vector } = Vector;
    web.top = vector(Math.random() * width, Math.random() * lowerY);
    web.bottom = vector(Math.random() * width, higherY + Math.random() * (height - higherY));
    web.left = vector(Math.random() * lowerX, Math.random() * height);
    web.right = vector(higherX + Math.random() * (width - higherX), Math.random() * height);
}

const render = (p) => {
    move();
    p.noStroke();
    p.fill(...color());
    p.quad(
        web.top.x, web.top.y,
        web.left.x, web.left.y,
        web.bottom.x, web.bottom.y,
        web.right.x, web.right.y
    );
}

const Web = {
    settings,
    render
}

export default Web;