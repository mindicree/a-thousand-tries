window.textboxSetText = (text) => {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            window.tbxText.innerHTML = text.substring(0, i+1)
        }, 25*i)
    }
}

window.textboxSetTitle = (text) => {
    toggleTitleBox(true);
    window.tbxTitle.innerHTML = text;
}

window.toggleTextBox = (view) => {
    if (view) {
        window.tbx.classList.remove('hidden')
    } else {
        console.log('Should hide')
        window.tbx.classList.add('hidden')
    }
}

window.toggleTitleBox = (view) => {
    if (view) {
        window.tbxTitle.parentNode.classList.remove('opacity-0')
        window.tbxText.parentNode.classList.remove('rounded-l-lg')
    } else {
        window.tbxTitle.parentNode.classList.add('opacity-0')
        window.tbxText.parentNode.classList.add('rounded-l-lg')
    }
}