import './bootstrap';
import './menu';
import './scene';
import './utility';
import Alpine from 'alpinejs';
import Sakura from './sakura';

window.Alpine = Alpine;

Alpine.start();

window.sakura = new Sakura('#home-screen', {
    maxSize: 30
});

// once everything is loaded, loa the homescreen
window.addEventListener('load', () => {
    document.querySelector('#loading-screen').classList.add('opacity-0');
    setTimeout(() => {
        document.querySelector('#loading-screen').classList.add('hidden');
        document.querySelector('#home-screen').classList.remove('opacity-0');
    }, 500)
})

window.initializeGameStart = () => {
    // gamplay mechanics
    // function to get scenario list
    window.currentScenario = {}
    window.currentDialogTreeIndex = 0;
    window.currentDialogIndex = 0;
    // function to get the current fake name
}


