const setBox = (width) => (height) => {
    getBox.width = width;
    getBox.height = height;
}
const getBox = {}
const Settings = {
    setBox,
    getBox
}

export default Settings;