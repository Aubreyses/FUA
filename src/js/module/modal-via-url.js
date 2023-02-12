import { modalInfo, imgLoader } from "./function";

export const openModalViaURL = () => {
    const modal = document.querySelector('.fest-modal');
    const background = document.querySelector('.dark-bg');

    const decodeURL = decodeURIComponent(location.hash).match(/#\w+/);

    if(decodeURL !== null) {
       openModal(modal, background, decodeURL);
    }
}

function openModal(modal, background, decodeURL) {
    const image = document.querySelector('.underpage-img');

    modal.classList.add('active');
    background.classList.add('active');
    document.body.style.overflow = 'hidden';

    modalInfo(decodeURL);

    image.addEventListener('load', (e) => {
        imgLoader();
    })
}
