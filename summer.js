
function getElementValue (fieldId){
    const elementField = document.getElementById(fieldId)
    const elementValuestring = elementField.innerText
    const elementValue = parseFloat(elementValuestring)
    return elementValue;
}

function addToProductEntry(prodType){
    const productEntry = document.getElementById('product-entry')
    const countProduct = productEntry.childElementCount;
    const p = document.createElement('p')
    p.classList.add('my-3');
    p.innerHTML = `${countProduct + 1}. ${prodType}`
    productEntry.appendChild(p)
}

function setElementInnerText (elementId,total){
    const element = document.getElementById(elementId)
    element.innerText = total
}