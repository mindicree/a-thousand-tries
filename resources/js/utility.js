window.setTransitionDuration = (element, duration=1000) => {
    // class filtering courtesy of geeksforgeeks
    let cleanedClasses = element.className.split(" ").filter(e => {
        return !e.includes('duration');
    })
    element.className = cleanedClasses.join(" ").trim()
    element.classList.add(`duration-${duration}`)
    console.log(element.className)
}

window.sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}