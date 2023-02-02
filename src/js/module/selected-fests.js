import { openModal, closeModal, modalInfo, withoutScrollbar, withScrollbar } from "./function";
import { eventsDatabase } from "./events-database";

export const selectedFests = () => {
    const festivals = document.querySelector('.festivals');
    const festivalLikes = document.querySelectorAll('.festival-like');
    const modalList = document.querySelector('.favorite-list');

    localStorage.clear();

    startSession(modalList, festivalLikes);
    likeChoise(modalList, festivals, festivalLikes);
    deleteLikes(modalList, festivalLikes);
}

function startSession(modalList, festivalLikes) {
    if(localStorage.length > 0) {
        modalStartAddItems(modalList, festivalLikes);
    }

    likeAudit(festivalLikes);

    auditListEmpty(modalList);
}

function likeChoise( modalList, festivals, festivalLikes ) {
    festivals.addEventListener('click', (e) => {

        let target = e.target;

        if (target.classList.contains('festival-like')) {
            
            if (target.classList.contains('like')) {
                target.classList.remove('like');
                target.classList.add('no-like');

                let festSequenceNum = target.classList[1];

                localStorage.removeItem(festSequenceNum);

                deleteNoLikesFest(festSequenceNum);

                auditListEmpty(modalList)

            } else if (target.classList.contains('no-like')) {
                target.classList.remove('no-like');
                target.classList.add('like');

                let festSequenceNum = target.classList[1];
                let festType = target.previousElementSibling.classList[1];

                localStorage.setItem(festSequenceNum, festType);

                addItems(modalList, festSequenceNum, festivalLikes);
            }

        }
    })
};

function addItems(modalList, festSequenceNum, festivalLikes) {
    const template = document.getElementById('tmplt');

    modalList.append(template.content.cloneNode(true))

    modalList.lastElementChild.classList.add( festSequenceNum );
    modalList.lastElementChild.querySelector('.item-name').innerHTML = eventsDatabase()[ festSequenceNum ].name;
    modalList.lastElementChild.querySelector('.item-type').classList.add(localStorage.getItem( festSequenceNum ));

    auditListEmpty(modalList);
    deleteLikes(modalList, festivalLikes);
    modalOpener();
}

function modalStartAddItems(modalList, festivalLikes) {
    const template = document.getElementById('tmplt');

    for( let i = 0; i < localStorage.length; i++) {
        modalList.append(template.content.cloneNode(true))

        modalList.lastElementChild.classList.add( localStorage.key(i) )
        modalList.lastElementChild.querySelector('.item-name').innerHTML = eventsDatabase()[ localStorage.key(i) ].name
        modalList.lastElementChild.querySelector('.item-type').classList.add(localStorage.getItem( localStorage.key(i) ))
    }

    deleteLikes(modalList, festivalLikes);
    modalOpener();
}

function deleteLikes(modalList, festivalLikes) {
    const deleteBtns = document.querySelectorAll('.item-delete');

    for( let button of deleteBtns ) {
        button.addEventListener('click', (e) => {
            localStorage.removeItem(e.target.parentElement.classList[1]);

            e.target.parentElement.remove()

            likeAudit(festivalLikes);

            auditListEmpty(modalList);
        })
    }
}

function likeAudit(festivalLikes) {
    for( let fest of festivalLikes) {

        if( localStorage.getItem(fest.classList[1]) != null) {
            fest.classList.remove('no-like');
            fest.classList.add('like')
        } else {
            fest.classList.remove('like');
            fest.classList.add('no-like')
        }
    }
}

function auditListEmpty(modalList) {

    if( localStorage.length > 0 && document.querySelector('.list-empty') != null ) {
        document.querySelector('.list-empty').remove();
    } else if ( localStorage.length < 1 && document.querySelectorAll('.list-empty').length < 1 ) {
        modalList.append(document.getElementById('tmplt-empty').content.cloneNode(true))
    } else {
        return;
    }
}

function deleteNoLikesFest(festSequenceNum) {
    const allLikesFest = document.querySelectorAll('.item-fest');

    for( let fest of allLikesFest ) {
        if( fest.classList.contains(festSequenceNum) ) {
            fest.remove();
        }
    }
}

function modalOpener() {
    const infoItems = document.querySelectorAll('.item-info');
    const modal = document.querySelector('.fest-modal');
    const background = document.querySelector('.dark-bg');
    const closer = document.querySelector('.underpage-close');
    const favoriteModal = document.querySelector('.favorite-modal');

    let beforeWidth = document.documentElement.clientWidth;

    for( let item of infoItems ) {
        item.addEventListener('click', (e) => {

            favoriteModal.classList.remove('active');

            openModal(modal, background);

            withoutScrollbar(beforeWidth);

            modalInfo(item.parentElement.classList[1]);
            closeModal(modal, closer, background);
        })
    }
}


