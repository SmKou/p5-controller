const vector = (x, y) => ({ x, y })

const add = (v1, v2) => vector(v1.x + v2.x, v1.y + v2.y)

const subtract = (v1, v2) => vector(v1.x - v2.x, v1.y - v2.y)

const scalar = (v, c) => vector(v.x * c, v.y * c)

const mag = (v) => Math.sqrt(v.x ** 2 + v.y ** 2)

const dist = (v1, v2) => Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2))

const dot = (v1, v2) => v1.x * v2.x + v1.y * v2.y

const angle = (v1, v2) => Math.acos(dotProduct(v1, v2) / (magnitude(v1) * magnitude(v2)))

// scalar component of v2 in direction of v1
const component = (v1, v2) => dotProduct(v1, v2) / magnitude(v1)

const cross = (v1, v2) => v1.x * v2.y - v1.y * v2.x

const Vector = {
    vector,
    add,
    subtract,
    scalar,
    mag,
    dist,
    dot,
    angle,
    component,
    cross
}

export default Vector;