import { eventsDatabase } from "./events-database";

export {openModal, closeModal, shutter, opener, imgLoader, modalInfo, withoutScrollbar, withScrollbar};

function openModal(modal, background) {
    const image = document.querySelector('.underpage-img');
    opener(modal, background);

    image.addEventListener('load', (e) => {
        imgLoader();
    })
}

function imgLoader() {
    const loader = document.querySelector('.img-loader');
    loader.style.display = 'none';
}

function closeModal(modal, closeTrigger, background) {
    const loader = document.querySelector('.img-loader');
    background.addEventListener('click', (e) => {
        if(e.target.classList.contains('dark-bg')) {
            shutter(modal, background);
        }

        history.pushState('', '', '/FUA/');

        withScrollbar();

        loader.style.display = 'block';
    });


    closeTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        shutter(modal, background);

        history.pushState('', '', '/FUA/');

        withScrollbar();

        loader.style.display = 'block';
    })
};

function opener(modal, background) {
    modal.classList.add('active');
    background.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function shutter(modal, background) {
    modal.classList.remove('active')
    background.classList.remove('active')
    document.body.style.overflow = '';
}

function modalInfo(modalInfoNum) {
    const modalText = document.querySelector('.underpage-text');
    const modalImg = document.querySelector('.underpage-img');
    const modalLink = document.querySelector('.underpage-link');

    modalText.innerHTML = eventsDatabase()[modalInfoNum].text;
    modalImg.src = eventsDatabase()[modalInfoNum].img;
    modalLink.href = eventsDatabase()[modalInfoNum].link;

    const url = new URL(location.href);

    url.searchParams.set('n', eventsDatabase()[modalInfoNum].url);
    url.searchParams.set('d', eventsDatabase()[modalInfoNum].date);

    history.pushState('', '', eventsDatabase()[modalInfoNum].url + '-' + eventsDatabase()[modalInfoNum].date);
}

function withoutScrollbar(beforeWidth) {
    const page = document.querySelector('.page');

    const afterWidth = document.documentElement.clientWidth;

    let widthDifference = afterWidth - beforeWidth; 

    page.style.paddingRight = widthDifference + 'px';
}

function withScrollbar() {
    const page = document.querySelector('.page');

    page.style.paddingRight = '';
};