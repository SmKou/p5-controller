import Settings from './state/Settings'

const pattern = {

}

const settings = (p) => {
    
}

const mousePressed = (p) => {
    p.noLoop();
}

const mouseReleased = (p) => {
    p.loop();
}

const render = (p) => {}

const Patterns = {
    settings,
    render,
    mousePressed,
    mouseReleased
}