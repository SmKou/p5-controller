// export getBox and set it to setBox(width, height)
const setBox = ({ width, height }) => () => ({ width, height })
const getBox = () => { }

export default settings = {
    setBox,
    getBox
}