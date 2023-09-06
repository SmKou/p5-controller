import {
    Vector
} from '../structs/vector'

const createWeb = (width, height) => {
    return () => ({
        top: Vector(Math.random() * width, Math.random() * height / 2),
        left: Vector(Math.random() * width / 2, Math.random() * height),
        right: Vector((width / 2) + Math.random() * width / 2, Math.random() * height),
        bottom: Vector(Math.random() * width, (height / 2) + Math.random() * height / 2)
    })
}

const moveWeb = (web) => {
    top: Vector()
}

export const WebOperations = {
    createWeb
}