
function createElementWithString(elementName, contentString) {
    

    const element = document.createElement(elementName);
    const node = document.createTextNode(contentString);
    element.appendChild(node);
    return element;
}

