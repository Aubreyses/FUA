'use strict'

// Modal page 

function modal() {
    const festivals = document.querySelector('.festivals');
    const modal = document.querySelector('.dark-bg')
    const closeButton = document.querySelector('.underpage-close')

    function modalDriver() {
        openModal(modal, festivals);
        closeModal(modal, closeButton);
    }

    modalDriver();




    function openModal(modal, openTrigger) {
        openTrigger.addEventListener('click', (e) => {
            console.log(e.target)
            let target = e.target

            console.log(target.parentNode.parentNode)
            if( !(e.target.classList.contains('festivals')) ) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'
            }

            fillingInfo(target);
        })
    }

    function closeModal(modal, closeTrigger) {
        closeTrigger.addEventListener('click', (e) => {
            modal.classList.remove('active')
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

        } else if (target.parentNode.classList.contains('festival')) {

            fastName = target.parentNode.classList[1]

        } else if (target.parentNode.parentNode.classList.contains('festival')) {

            fastName = target.parentNode.parentNode.classList[1]
        }

        modalText.innerHTML = localStorage.getItem(`${fastName}Text`);
        modalImg.src = localStorage.getItem(`${fastName}Img`);
        modalLink.href = localStorage.getItem(`${fastName}Link`)

    }
}

modal();





localStorage.setItem('atlasText', `Atlas (до 2022 року – Atlas Weekend) — один з
найбільших музичних фестивалів України. Проходить щорічно у Києві в першій половині
липня в Національному експоцентрі України (ВДНГ). Заснований у 2015 році концертною
агенцією PMK Event Agency, яка є власником київського нічного клубу Atlas, від якого
фестиваль і отримав назву. Раніше називався Atlas Weekend, 1 лютого 2022 року
організатори повідомили про зміну назви на фестиваль Atlas.`);
localStorage.setItem('atlasImg', 'img/modal/atlas.png');
localStorage.setItem('atlasLink', 'https://atlasfestival.com/');

localStorage.setItem('bandershtatText', `«Бандерштат» — всеукраїнський «фестиваль українського духу»,
що проводиться щоліта на Волині, у місті Луцьку та околицях. Він є артвізитівкою цього краю.
Вперше проведений 2007 року й відтоді став щорічним.`);
localStorage.setItem('bandershtatImg', 'img/modal/bandershtat.png');
localStorage.setItem('bandershtatLink', 'http://bandershtat.org.ua/');

localStorage.setItem('woodstockText', `«Вудсток» — один із наймасштабніших і найвизначніших
в історії рок-фестивалів, символ вільного і мирного співжиття, а також взаємної допомоги 
величезної кількості споріднених ідеєю людей. У 1995 році для волонтерів польської акції
«Великий Оркестр Святкової Допомоги» (фундація «WOŚP») було організовано перший польський
фестиваль під назвою «Зупинка Woodstock» («Przystanek Woodstock»).`)
localStorage.setItem('woodstockImg', 'img/modal/woodstock.jpg')
localStorage.setItem('woodstockLink', 'https://www.facebook.com/woodstock.in.ua/')

localStorage.setItem('bulhakovfestText', `«БулгаковFest» — щорічний фестиваль київської міської культури,
ініціатором та спонсором якого є Фонд «Культурні Новації» відомого мецената та букініста Влада Трубіцина.
Метою заходу є збереження та популяризація історичних місць та славетних київських імен, підтримка міської
культури, запровадження живих та інтерактивних форм вшанування відомих історичних особистостей міста Києва.`);
localStorage.setItem('bulhakovfestImg', 'img/modal/bulgakovfest.jpg');
localStorage.setItem('bulhakovfestLink', 'https://www.facebook.com/Bulgakovfestkyiv/');
