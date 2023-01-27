import { openModal, closeModal, modalInfo, withoutScrollbar, withScrollbar } from "./function";

export const modal = () => {
    

    modalManage('.underpage', '.festivals', '.underpage-close', '.dark-bg');

    modalLikeManage('.favorite-modal', '.favorite', '.favorite-close', '.dark-bg');

}

function modalManage(modalClass, triggerClass, closerClass, backgroundClass) {
    const trigger = document.querySelector(triggerClass);
    const modal = document.querySelector(modalClass);
    const closer = document.querySelector(closerClass);
    const background = document.querySelector(backgroundClass);

    modalOpener(modal, trigger, background);
    closeModal(modal, closer, background);
}

function modalLikeManage(modalClass, triggerClass, closerClass, backgroundClass) {
    const trigger = document.querySelector(triggerClass);
    const modal = document.querySelector(modalClass)
    const closer = document.querySelector(closerClass);
    const background = document.querySelector(backgroundClass);

    openLikeModal(modal, trigger, background);
    closeModal(modal, closer, background);
};

function openLikeModal(modal, trigger, background) {
    let beforeWidth = document.documentElement.clientWidth;
    
    trigger.addEventListener('click', (e) => {
        modal.classList.add('active');
        background.classList.add('active');
        document.body.style.overflow = 'hidden';

        withoutScrollbar(beforeWidth);
    })
}

function modalOpener(modal, openTrigger, background) {
    openTrigger.addEventListener('click', (e) => {
        let target = e.target

        if (fillingInfo(target)) {
            return;
        } else if( !(e.target.classList.contains('festivals')) ) {
            let beforeWidth = document.documentElement.clientWidth;

            openModal(modal, background);

            withoutScrollbar(beforeWidth);
        }
    })
}

function fillingInfo(target) {
    let fastName;

    if(target.tagName == 'LI') {

        fastName = target.classList[1];
        modalInfo(fastName);
    } else if (target.classList.contains('festival-like')) {

        return true;

    } else if (target.parentNode.classList.contains('festival')) {

        fastName = target.parentNode.classList[1];
        modalInfo(fastName);

    } else if (target.parentNode.parentNode.classList.contains('festival')) {

        fastName = target.parentNode.parentNode.classList[1];
        modalInfo(fastName);
    }

    return false
};
