'use strict'

const eventsStorage = [
    {
        text: `Atlas (до 2022 року – Atlas Weekend) — один з
        найбільших музичних фестивалів України. Проходить щорічно у Києві в першій половині
        липня в Національному експоцентрі України (ВДНГ). Заснований у 2015 році концертною
        агенцією PMK Event Agency, яка є власником київського нічного клубу Atlas, від якого
        фестиваль і отримав назву. Раніше називався Atlas Weekend, 1 лютого 2022 року
        організатори повідомили про зміну назви на фестиваль Atlas.`,
        img: 'img/modal/atlas.png',
        link: 'https://atlasfestival.com/'
    },

    {
        text: `«Бандерштат» — всеукраїнський «фестиваль українського духу»,
        що проводиться щоліта на Волині, у місті Луцьку та околицях. Він є артвізитівкою цього краю.
        Вперше проведений 2007 року й відтоді став щорічним.`,
        img: 'img/modal/bandershtat.png',
        link: 'http://bandershtat.org.ua/',
    },

    {
        text: `«Вудсток» — один із наймасштабніших і найвизначніших
        в історії рок-фестивалів, символ вільного і мирного співжиття, а також взаємної допомоги 
        величезної кількості споріднених ідеєю людей. У 1995 році для волонтерів польської акції
        «Великий Оркестр Святкової Допомоги» (фундація «WOŚP») було організовано перший польський
        фестиваль під назвою «Зупинка Woodstock» («Przystanek Woodstock»).`,
        img: 'img/modal/woodstock.jpg',
        link: 'https://www.facebook.com/woodstock.in.ua/',
    },

    {
        text: `«БулгаковFest» — щорічний фестиваль київської міської культури,
        ініціатором та спонсором якого є Фонд «Культурні Новації» відомого мецената та букініста Влада Трубіцина.
        Метою заходу є збереження та популяризація історичних місць та славетних київських імен, підтримка міської
        культури, запровадження живих та інтерактивних форм вшанування відомих історичних особистостей міста Києва.`,
        img: 'img/modal/bulgakovfest.jpg',
        link: 'https://www.facebook.com/Bulgakovfestkyiv/',
    },
]

// Modal page 

function modalDetail() {

    function modalManage(modalClass, triggerClass, closerClass, backgroundClass) {
        const trigger = document.querySelector(triggerClass);
        const modal = document.querySelector(modalClass)
        const closer = document.querySelector(closerClass);
        const background = document.querySelector(backgroundClass);

        openModal(modal, trigger, background);
        closeModal(modal, closer, background);
    }

    modalManage('.underpage', '.festivals', '.underpage-close', '.dark-bg');

    function modalLikeManage(modalClass, triggerClass, closerClass, backgroundClass) {
        const trigger = document.querySelector(triggerClass);
        const modal = document.querySelector(modalClass)
        const closer = document.querySelector(closerClass);
        const background = document.querySelector(backgroundClass);

        function openLikeModal(modal, trigger, background) {
            trigger.addEventListener('click', (e) => {
                modal.classList.add('active')
                background.classList.add('active')
                document.body.style.overflow = 'hidden'
            })
        }

        openLikeModal(modal, trigger, background);
        closeModal(modal, closer, background);
    }

    modalLikeManage('.favorite-modal', '.favorite', '.favorite-close', '.dark-bg');




    function openModal(modal, openTrigger, background) {
        openTrigger.addEventListener('click', (e) => {
            let target = e.target

            if (fillingInfo(target)) {
                return;
            } else if( !(e.target.classList.contains('festivals')) ) {
                modal.classList.add('active');
                background.classList.add('active');
                document.body.style.overflow = 'hidden'
            }
        })
    }

    function closeModal(modal, closeTrigger, background) {
        closeTrigger.addEventListener('click', (e) => {
            modal.classList.remove('active')
            background.classList.remove('active')
            document.body.style.overflow = ''
        })
    }

    function fillingInfo(target) {
        const modalText = document.querySelector('.underpage-text');
        const modalImg = document.querySelector('.underpage-img');
        const modalLink = document.querySelector('.underpage-link');

        let fastName;

        if(target.tagName == 'LI' ) {

            fastName = target.classList[1]
        } else if (target.classList.contains('festival-like')) {

            return true;

        } else if (target.parentNode.classList.contains('festival')) {

            fastName = target.parentNode.classList[1]

        } else if (target.parentNode.parentNode.classList.contains('festival')) {

            fastName = target.parentNode.parentNode.classList[1]
        }

        modalText.innerHTML = eventsStorage[fastName].text;
        modalImg.src = eventsStorage[fastName].img;
        modalLink.href = eventsStorage[fastName].link

        return false
    }
}
modalDetail();


// Sort form 
function sort() {
    const menu = document.querySelector('.menu');
    const menuButton = document.querySelector('.menu-button')
    const allFestivals = document.querySelectorAll('.festival')
    const sortForm = document.querySelector('.form-choise')
    const checkboxs = document.querySelectorAll('.checkbox');

    function festivalSort(festivals, checkboxs) {
        sortForm.addEventListener('change', (e) => {
            for(let input of checkboxs) {
                if ( !(input.checked) ) {

                    for(let fest of festivals) {
                        if(input.name == fest.classList[3]) {
                            fest.classList.add('unselected')
                        }
                    }
                } else {
                    for(let fest of festivals) {

                        if(input.name == fest.classList[3]) {
                            fest.classList.remove('unselected')
                        } 
                    }
                }
            }
        })
    }

    festivalSort(allFestivals, checkboxs)


    function menuManage(menu, form, button) {
        button.addEventListener('click', (e) => {
            menu.classList.toggle('active')
            form.classList.toggle('active')
        })
    }

    menuManage(menu, sortForm, menuButton);
}
sort();



// Likes 
function likes() {
    const festivals = document.querySelector('.festivals');
    const festivalLikes = document.querySelectorAll('.festival-like')

    function likeChoise() {
        festivals.addEventListener('click', (e) => {
            let target = e.target;

            if (target.classList.contains('festival-like')) {
                
                if (target.classList.contains('like')) {
                    target.classList.remove('like');
                    target.classList.add('no-like');
                } else if (target.classList.contains('no-like')) {
                    target.classList.remove('no-like');
                    target.classList.add('like');
                }
            }
        })
    }

    likeChoise();

}
likes()





