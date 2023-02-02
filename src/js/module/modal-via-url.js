import { modalInfo } from "./function";

export const openModalViaURL = () => {
    const modal = document.querySelector('.fest-modal');
    const background = document.querySelector('.dark-bg');

    console.log(location.hash)
    const decodeURL = decodeURIComponent(location.hash).match(/#\w+/);

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
