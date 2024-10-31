const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor=name;
}

function randomColor() {
const purple = Math.round(Math.random() * 225)
const gray = Math.round(Math.random() * 225)
const lightgreen = Math.round(Math.random() * 225)

const color = `rgb(${purple}, ${gray}, ${lightgreen})`
body.style.backgroundColor = color;
}

