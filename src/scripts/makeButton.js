const makeButton = val => {
    const button = document.createElement('button')
    button.innerHTML = val
    return button
}

export default makeButton