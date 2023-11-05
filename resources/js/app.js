import './bootstrap';
import './menu';
import './utility';
import './textbox';
import Alpine from 'alpinejs';
import Sakura from './sakura';
import welcomeScenario from './scenarios/welcome';

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
    }, 3000)
    initializeNewGame();
}

window.initializeNewGame = () => {
    // gamplay mechanics
    window.currentScenario = {}
    window.currentDialogTreeIndex = 0;
    window.currentDialogIndex = 0;
    window.currentDialogRoute = [];
    window.currentName = getNewName() // real name is Michael
    window.currentDay = 0;
    window.gameRoute = [];
    window.loveLevel = 0;
    window.failedScenario = false;
    window.concludeScenario = false;
    window.canAdvance = false;

    window.listOfMemories = [];
    window.listOfConcerns = [];
    window.listOfItems = [];
    // function to get the current fake name
    setTimeout(() => {
        gameScreen.classList.remove('hidden')
    }, 1000)
}

window.continueGame = () => {
    window.currentScenario = {}
    window.currentDialogTreeIndex = 0;
    window.currentDialogIndex = 0;
    window.currentDialogRoute = [];
    window.currentName = getNewName() // real name is Michael
    window.currentDay = 0;
    window.gameRoute = [];
    window.loveLevel = 0;
    window.failedScenario = false;
}

window.getNewName = () => {
    let names = ['Chris', 'Dave', 'Sam', 'Jayden', 'Ben', ''];
}

window.getCOD = () => {

}

window.gameLoop = () => {
    // load scenario

    // load dialog tree

    // load dialog in dialog tree

    // can advance = false

    // if predialog, execute

    // if response dialog, calculate and respond

    // if conditional dialog replace currentDialog tree with new one based on function

    // if decisionTree, load decision and execute accordingly

    // else just run regular dialog

    // if title is present, make sure is visible and how text, else, hide

    //can advance = true
}

window.changeScene = () => {
    // TODO implement
    alert('TODO: implement changeScene function')
}

window.changeSceneFTB = () => {
    // TODO implement
    alert('TODO: implement changeSceneFTB function')
}

window.changeSceneFTW = () => {
    // TODO implement
    alert('TODO: implement changeSceneFTW function')
}

window.getCharacter = (name) => {
    // TODO implement
    alert('TODO implement getCharacter');
}