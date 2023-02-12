export const sort = () => {
    const menu = document.querySelector('.menu');
    const menuButton = document.querySelector('.menu-button');
    const menuArrow = document.querySelector('.menu-img')
    const allFestivals = document.querySelectorAll('.festival')
    const sortForm = document.querySelector('.form-choise')
    const checkboxs = document.querySelectorAll('.checkbox');
    const checkboxTexts = document.querySelectorAll('.checkbox-text');

    menuManage(menu, menuArrow, sortForm, menuButton);

    choiseInput(sortForm, allFestivals, checkboxs);
    choiseText(checkboxTexts, allFestivals, checkboxs);
};

function choiseText(checkboxTexts, festivals, checkboxs) {
    for( let text of checkboxTexts ) {

        text.addEventListener('click', (e) => {
            const checkbox = e.target.previousElementSibling;
            if( checkbox.checked === false ) {
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }

            festsSorted(festivals, checkboxs)

            showNonFests(checkboxs);
        });
        
    }
}

function choiseInput(sortForm, festivals, checkboxs) {
    sortForm.addEventListener('change', (e) => {
        console.log(e);
        festsSorted(festivals, checkboxs);

        showNonFests(checkboxs);
    })
}

function festsSorted(festivals, checkboxs) {
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
}

function menuManage(menu, menuArrow, form, button) {
    button.addEventListener('click', (e) => {
        menu.classList.toggle('active')
        menuArrow.classList.toggle('active')
        form.classList.toggle('active')
    })
}

function showNonFests(checkboxs) {
    const nonFests = document.querySelector('.none-fests');

    let checkedNum = 6;

    for(let input of checkboxs) {
        if(input.checked) {
            checkedNum++;
        } else if(!(input.checked)) {
            checkedNum--;
        }
    }

    if(checkedNum === 0) {
        nonFests.style.display = 'block';
    } else {
        nonFests.style.display = 'none'; 
    }
}
