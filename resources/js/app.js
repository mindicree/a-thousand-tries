import './bootstrap';
import './menu';
import './scene';
import './utility';
import './textbox';
import Alpine from 'alpinejs';
import Sakura from './sakura';

window.Alpine = Alpine;

Alpine.start();

// content container
window.contentContainer = document.querySelector('#content-container')

// game screens
window.loadScreen = document.querySelector('#loading-screen')
window.homeScreen = document.querySelector('#home-screen')
window.gameScreen = document.querySelector('#game-screen')

// textbox parts
window.tbx = document.querySelector('#textbox')
window.tbxTitle = document.querySelector('#textbox-title')
window.tbxText = document.querySelector('#textbox-text')


window.sakura = new Sakura('#home-screen', {
    maxSize: 30
});

// once everything is loaded, loa the homescreen
window.addEventListener('load', () => {
    loadScreen.classList.add('opacity-0');
    setTimeout(() => {
        loadScreen.classList.add('hidden', '-z-50');
        homeScreen.classList.remove('opacity-0'); 
    }, 500)
})

window.startGame = () => {
    contentContainer.classList.add('bg-black')
    setTransitionDuration(homeScreen, 5000)
    setTimeout(() => {
        homeScreen.classList.add('opacity-0')
    }, 1000)
    sakura.stop(true);
    setTimeout(() => {
        clearHome()
    }, 500)
    setTimeout(() => {
        homeScreen.classList.add('hidden')
        gameScreen.classList.remove('hidden')
        textboxSetText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida finibus rutrum. Cras convallis, est eget elementum ultricies, erat tortor venenatis justo, sit amet euismod orci risus eu turpis. Morbi pulvinar vitae orci tristique gravida. Suspendisse vitae scelerisque ligula. Nullam sed sapien ex. In volutpat, dui nec laoreet porttitor, arcu justo cursus eros, et rutrum lorem felis sit amet velit. Fusce in nisl euismod, auctor augue et, posuere libero.')
    }, 3000)
    initializeGame();
}

window.initializeGame = () => {
    // gamplay mechanics
    // function to get scenario list
    window.currentScenario = {}
    window.currentDialogTreeIndex = 0;
    window.currentDialogIndex = 0;
    window.currentDialogRoute = [];
    window.listOfMemories = [];
    // function to get the current fake name
    setTimeout(() => {

    })
}


