import { openModal, shutter, withoutScrollbar, withScrollbar } from "./function"
export const formModal = () => {
    const modal = document.querySelector('.form-modal');
    const background = document.querySelector('.dark-bg');
    const trigger = document.querySelector('.proposition-link');
    const closeButton = document.querySelector('.form-close');

    formOpener(trigger, modal, background); 
    
    formCloser(background, closeButton, modal);

    formLetterLimiter();

    checkNumKey();
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


function formLetterLimiter() {
    const letterForms = document.querySelectorAll('.form-text');

    for( let form of letterForms ) {
        form.addEventListener('input', (e) => {
            console.log(form.value.length);

            if(form.value.length >= 30) {
                return false;
            }
        })
    }
}

function checkNumKey() {
    const numForm = document.querySelector('.form-date')

    numForm.addEventListener('keydown', (e) => {

        if( e.keyCode == '8' || e.key >= '0' && e.key <= '9' ) {
            return;
                
        };

        e.preventDefault();
    })
}