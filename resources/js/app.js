import './bootstrap';
import Alpine from 'alpinejs';
import Sakura from './sakura';

window.Alpine = Alpine;

Alpine.start();

// once everything is loaded, loa the homescreen
window.addEventListener('load', () => {
    // TODO reveal and animate the homescreen
    let sakura = new Sakura('#home-screen');
    document.querySelector('#loading-screen').classList.add('opacity-0');
    setTimeout(() => {
        document.querySelector('#loading-screen').classList.add('hidden');
        document.querySelector('#home-screen').classList.remove('opacity-0');
    }, 500)
    setTimeout(() => {
        
    })
    
})
