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
window.masterBlack = document.querySelector('#master-black')

// textbox parts
window.tbx = document.querySelector('#textbox')
window.tbxTitle = document.querySelector('#textbox-title')
window.tbxText = document.querySelector('#textbox-text')

// decision container
window.decisionContainer = document.querySelector('#decision-container')

// sprites
window.spriteRight = document.querySelector('#sprite-right')

window.sakura = new Sakura('#home-screen', {
    maxSize: 30
});

// function to preload images

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
    }, 50)
    setTimeout(() => {
        homeScreen.classList.add('hidden')
    }, 3000)
    initializeNewGame();
}

window.initializeNewGame = () => {
    // gamplay mechanics
    continueGame();

    window.listOfMemories = {
        parents: 0,
        prev_girl: 0,
        best_friend: 0,
        school: 0,
        sarah: 0,
    };
    window.listOfConcerns = {
        parents: 0,
        prev_girl: 0,
        best_friend: 0,
        school: 0,
        sarah: 0,
    };
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
    window.canAdvance = true;
    window.autoProgress = true;
    window.decisionContainerActive = false;
    window.scenes = document.getElementsByClassName('scene');
}

window.getNewName = () => {
    let names = ['Chris', 'Dave', 'Sam', 'Jayden', 'Ben', 'John', 'Alex', 'Leo', 'Oli', 'Ethan', 'Luke'];
}

// add all ways to use game loop
window.addEventListener('click', () => {
    if (canAdvance && !decisionContainerActive) {
        gameLoop()
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
    if (!currentDialog) {
        if (failedScenario || loveLevel < 0) {
            gameOver()
        } else {
            currentScenario = null;
            if (playerHasWon()) {
                // TODO implement
                alert('TODO figure out what to do after player wins')
            } else {
                gameLoop()
            }
            
        }
    }

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
    clearTimeout()
    if (currentDialog.hasOwnProperty("calcDialog")) {
        let displayText = currentDialog.calcDialog()
        let timeToAllow = displayText.length * 25 + 100;
        setTimeout(() => {
            textboxSetText(displayText)
        }, currentDialog.textDelay || 0)
        setTimeout(() => {
            canAdvance = true;
        }, timeToAllow)
    } else if (currentDialog.hasOwnProperty("decisionTree")) {
        decisionContainerActive = true;
        setDecisionTreeOptions(currentDialog.decisionTree)
        canAdvance = true;
    } else {
        let displayText = currentDialog.text
        let timeToAllow = displayText.length * 25 + 100;
        setTimeout(() => {
            textboxSetText(displayText)
        }, currentDialog.textDelay || 0)
        setTimeout(() => {
            canAdvance = true;
        }, timeToAllow)
    }
}

window.changeScene = (newSceneName, speed="slow") => {
    let newActiveScene = document.getElementById(newSceneName);
    let currActiveScene = Array.from(document.getElementsByClassName('scene-active'))[0];
    if (!newActiveScene || !currActiveScene) {
        console.log('Test')
        return
    }

    currActiveScene.style.zIndex = 10;
    newActiveScene.style.zIndex = 0;
    newActiveScene.style.opacity = 1.0;

    newActiveScene.classList.remove('scene-inactive')
    newActiveScene.classList.add('scene-active')

    currActiveScene.classList.add(`active-to-inactive-${speed}`)
    setTimeout(() => {
        currActiveScene.classList.add('scene-inactive')
        currActiveScene.classList.remove('scene-active')
    }, 5000);
    
}

window.changeSceneFTB = (newSceneName, speed=3000) => {
    textboxSetText('')
    textboxSetTitle('')

    canAdvance = false;
    
    let newActiveScene = document.getElementById(newSceneName);
    let currActiveScene = Array.from(document.getElementsByClassName('scene-active'))[0];

    masterBlack.classList.remove('-z-50')
    masterBlack.classList.add('z-50')
    masterBlack.style.transitionDuration = `${speed/2}ms`
    masterBlack.style.transitionTiming = 'linear';
    masterBlack.classList.remove('opacity-0')

    setTimeout(() => {
        newActiveScene.classList.remove('scene-inactive')
        newActiveScene.classList.add('scene-active')
        currActiveScene.classList.remove('scene-inactive')
        currActiveScene.classList.add('scene-active')
        masterBlack.classList.add('opacity-0')
    }, speed/2 + 100)

    setTimeout(() => {
        masterBlack.classList.add('-z-50')
        masterBlack.classList.remove('z-50')
        masterBlack.classList.add('opacity-0')
        canAdvance = true;
    }, speed + 125)
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
    decisionContainer.innerHTML = "";
    options.forEach(option => {
        let newOptionButton = document.createElement('button')
        newOptionButton.className = "text-white text-xl w-full p-4 bg-fuchsia-300 hover:bg-fuchsia-400 transition ease-in-out duration-100 rounded-full text-center";
        newOptionButton.innerHTML = `"${option.text}"`
        newOptionButton.addEventListener('click', () => {
            option.result(window);
            decisionContainer.classList.add('opacity-0')
            setTimeout(() => {
                decisionContainer.classList.add('-z-50')
                decisionContainerActive = false;
                gameLoop()
            }, 200)
        })
        decisionContainer.appendChild(newOptionButton)
    })

    decisionContainer.classList.remove('-z-50')
    decisionContainer.classList.remove('opacity-0')
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

window.playerHasWon = () => {
    // TODO implement
    alert('TODO implement playerHasWon')
}

// sprite things
window.changeSpriteRight = (sprite) => {
    Array.from(document.getElementsByClassName('sprite')).forEach(element => {
        element.classList.add('hidden')
    })
    document.getElementById(sprite).classList.remove('hidden')
}