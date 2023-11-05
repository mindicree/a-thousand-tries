window.clearHome = () => {
    setTimeout(() => [
        document.querySelector('#home-sarah').classList.add('translate-x-1/4', 'opacity-0')
    ], 1)
    setTimeout(() => [
        document.querySelector('#home-title').classList.add('-translate-x-1/4', 'opacity-0')
    ], 200)
    setTimeout(() => [
        document.querySelector('#home-menu').classList.add('-translate-x-1/4', 'opacity-0')
    ], 400)
}

window.redoHome = () => {
    setTimeout(() => [
        document.querySelector('#home-sarah').classList.remove('translate-x-1/4', 'opacity-0')
    ], 300)
    setTimeout(() => [
        document.querySelector('#home-title').classList.remove('-translate-x-1/4', 'opacity-0')
    ], 100)
    setTimeout(() => [
        document.querySelector('#home-menu').classList.remove('-translate-x-1/4', 'opacity-0')
    ], 400)
}

window.showCredits = () => {
    clearHome()
    document.querySelector('#home-tutorial').classList.add('hidden')
    setTimeout(() => {
        document.querySelector('#home-credits').classList.remove('-z-50', 'opacity-0')
    }, 600)
}

window.hideCredits = () => {
    document.querySelector('#home-credits').classList.add('opacity-0')
    redoHome()
    setTimeout(() => {
        document.querySelector('#home-credits').classList.add('-z-50')
        document.querySelector('#home-tutorial').classList.remove('hidden')
    }, 600)
}

window.showTutorial = () => {
    clearHome()
    document.querySelector('#home-credits').classList.add('hidden')
    setTimeout(() => {
        document.querySelector('#home-tutorial').classList.remove('-z-50', 'opacity-0')
    }, 600)
}

window.hideTutorial = () => {
    document.querySelector('#home-tutorial').classList.add('opacity-0')
    redoHome()
    setTimeout(() => {
        document.querySelector('#home-tutorial').classList.add('-z-50')
        document.querySelector('#home-credits').classList.remove('hidden')
    }, 600)
}

window.startGame = () => {
    let homeScreen = document.querySelector('#home-screen')
    document.querySelector('body').classList.remove('bg-white')
    document.querySelector('body').classList.add('bg-black')
    sakura.stop(true);
    clearHome()
    setTransitionDuration(homeScreen, 5000)
    homeScreen.classList.add('opacity-0')
    initializeGameStart();
}