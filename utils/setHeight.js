const setHeight = (className) => {
    const elements = Array.from(document.getElementsByClassName(className))
    const maxHeight = Math.max.apply(Math, elements.map(function (o) { return o.clientHeight; }))
    elements.map(element => element.style.height = `${maxHeight}px`)
}

export default setHeight