window.textboxSetText = (text) => {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            window.tbxText.innerHTML = text.substring(0, i)
        }, 25*i)
    }
}

window.toggleTextBox = () => {

}

window.toggleTitleBox = () => {
    
}