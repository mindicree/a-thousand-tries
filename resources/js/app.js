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
    continueGame();

    window.listOfMemories = [];
    window.listOfConcerns = [];
    window.listOfItems = [];
    // function to get the current fake name
    setTimeout(() => {
        gameScreen.classList.remove('hidden')
    }, 1000)
}

window.continueGame = () => {
    window.currentScenario = null
    window.currentDialogTree = null;
    window.currentDialog = 0;
    window.currentName = getNewName() // real name is Michael
    window.currentDay = 0;
    window.gameRoute = [];
    window.loveLevel = 0;
    window.failedScenario = false;
    window.canAdvance = false;
    window.autoProgress = true;
}

window.getNewName = () => {
    let names = ['Chris', 'Dave', 'Sam', 'Jayden', 'Ben', ''];
}

// add all ways to use game loop
window.addEventListener('click', () => {
    if (canAdvance || autoProgress) {
        gameLoop()
    }
})
window.addEventListener('keydown', (e) => {
    if (['Enter, Spacebar'].includes(e.key) && (canAdvance || autoProgress)) {
        gameLoop();
    }
})

window.gameLoop = () => {
    // if scenario ended, load scenario if success, or game end if did not
    let new_scenario = false;
    if (!currentScenario) {
        currentDay++;
        new_scenario = true;
        switch(currentDay) {
            case 1:
                currentScenario = welcomeScenario
                break
            case 2:
            case 3:
                currentScenario = getDateScenario()
                break
            case 4:
                currentScenario = getSusDateScenarion()
                break
            case 5:
                currentScenario = getRevelationScenario()
                break
            case 6:
                currentScenario = getConfrontationScenario()
                break
            case 7:
                currentScenario = getEndingScenario()
                break
        }
    }

    // load dialog tree from scenario if new
    if (new_scenario) {
        currentDialogTree = currentScenario.dialogTree["start"];
    }

    // load dialog in dialog tree
    currentDialog = currentDialogTree.shift()

    // can advance = false
    canAdvance = false;

    // calculate time before advance can become true, and setTimeout

    // if predialog, execute
    if (currentDialog.hasOwnProperty("preDialog")) {
        currentDialog.preDialog();
    }

    // if title is present, make sure is visible and how text, else, hide
    if (currentDialog.hasOwnProperty("title")) {
        textboxSetTitle(currentDialog.title)
    } else {
        toggleTitleBox(false);
    }

    // if conditional dialog replace currentDialog tree with new one based on function
    if (currentDialog.hasOwnProperty("changeDialogTree")) {
        currentDialogTree = currentScenario.dialogTree[currentDialog.changeDialogTree()]
    }

    // if response dialog, calculate and respond
    // else if decisionTree, load decision and execute accordingly
    // else just run regular dialog
    // run post dialog
    if (currentDialog.hasOwnProperty("calcDialog")) {
        let displayText = currentDialog.calcDialog()
        let timeToAllow = displayText.length * 25 + 100;
        textboxSetText(displayText)
        setTimeout(() => {
            canAdvance = true;
        }, timeToAllow)
    } else if (currentDialog.hasOwnProperty("decisionTree")) {
        setDecisionTreeOptions(currentDialog.decisionTree)
        canAdvance = true;
    } else {
        let displayText = currentDialog.text
        let timeToAllow = displayText.length * 25 + 100;
        textboxSetText(displayText)
        setTimeout(() => {
            canAdvance = true;
        }, timeToAllow)
    }
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

window.gameOver = () => {
    // TODO implement
    alert('TODO implement gameOver')
}

window.setDecisionTreeOptions = (options) => {
    // TODO implement
    alert('TODO implement setDecisionTreeOptions')
}

window.getDateScenario = () => {
    // TODO implement
    alert('TODO implement getDateScenario')
}

window.getSusDateScenarion = () => {
    // TODO implement
    alert('TODO implement getSusDateScenarion')
}

window.getRevelationScenario = () => {
    // TODO implement
    alert('TODO implement getRevelationScenario')
}

window.getConfrontationScenario = () => {
    // TODO implement
    alert('TODO implement getConfrontationScenario')
}

window.getEndingScenario = () => {
    // TODO implement
    alert('TODO implement getEndingScenario')
}