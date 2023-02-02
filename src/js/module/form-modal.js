import { openModal, shutter, withoutScrollbar, withScrollbar } from "./function"
export const formModal = () => {
    const modal = document.querySelector('.form-modal');
    const background = document.querySelector('.dark-bg');
    const trigger = document.querySelector('.proposition-link');
    const closeButton = document.querySelector('.form-close');

    formOpener(trigger, modal, background); 
    
    formCloser(background, closeButton, modal)
}

function formOpener(trigger, modal, background) {
    trigger.addEventListener('click', (e) => {
        const beforeWidth = document.documentElement.clientWidth;

        openModal(modal, background);

        withoutScrollbar(beforeWidth);
    });
}

function formCloser(background, closeButton, modal) {
    background.addEventListener('click', (e) => {
        if(e.target.classList.contains('dark-bg')) {
            shutter(modal, background);

            withScrollbar();
        }
    });

    closeButton.addEventListener('click', (e) => {
        e.preventDefault();

        shutter(modal, background);

        withScrollbar();
    });
}