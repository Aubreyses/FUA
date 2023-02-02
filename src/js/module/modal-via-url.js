import { modalInfo } from "./function";

export const openModalViaURL = () => {
    const modal = document.querySelector('.fest-modal');
    const background = document.querySelector('.dark-bg');

    const url = new URL(window.location);
    const decodeURL = decodeURIComponent(url.search).match(/#\w+/);

    if(decodeURL !== null) {
       openModal(modal, background, decodeURL);
    }
}

function openModal(modal, background, decodeURL) {

    modal.classList.add('active');
    background.classList.add('active');
    document.body.style.overflow = 'hidden';

    modalInfo(decodeURL);

}