import { openModal, shutter, withoutScrollbar, withScrollbar } from "./function"
export const formModal = () => {
    const modal = document.querySelector('.form-modal');
    const background = document.querySelector('.dark-bg');
    const trigger = document.querySelector('.proposition-link');
    const closeButton = document.querySelector('.form-close');

    const form = document.querySelector('.form');
    const formButtons = document.querySelector('.form-buttons');
    const inputs = document.querySelectorAll('.form-input');

    let link = 'https://jsonplaceholder.typicode.com/posts'

    formOpener(trigger, modal, background); 
    
    formCloser(background, closeButton, modal, inputs);

    formLetterLimiter();

    checkNumKey();

    for( let input of inputs) {

        inputsFocusing(input);

        inputsBlur(input);

    }

    onSubmit(inputs, form, formButtons, link);
}

function formOpener(trigger, modal, background) {
    trigger.addEventListener('click', (e) => {
        const beforeWidth = document.documentElement.clientWidth;

        openModal(modal, background);

        withoutScrollbar(beforeWidth);
    });
}

function formCloser(background, closeButton, modal, inputs) {
    background.addEventListener('click', (e) => {
        if(e.target.classList.contains('dark-bg')) {
            shutter(modal, background);

            withScrollbar();

            for(let input of inputs) {

                removeInputsClass(input)
                
            }
        }
    });

    closeButton.addEventListener('click', (e) => {
        e.preventDefault();

        shutter(modal, background);

        withScrollbar();

        for(let input of inputs) {

            removeInputsClass(input)
            
        }
    });
}


function formLetterLimiter() {
    const letterForms = document.querySelectorAll('.form-text');

    for( let form of letterForms ) {
        form.addEventListener('input', (e) => {

            if(form.value.length >= 30) {
                return false;
            }
        })
    }
}

function checkNumKey() {
    const numForm = document.querySelector('.form-date')

    numForm.addEventListener('keydown', (e) => {

        if( e.keyCode == '8' || e.key =='-' || e.key =='.' || e.key == ',' || e.key =='/' || e.key ==' ' || e.key >= '0' && e.key <= '9' ) {
            return;        
        };

        e.preventDefault();
    })
}

function inputsFocusing(input) {

    input.addEventListener('focus', (e) => {
        if(input.classList.contains('success')) {
            input.classList.remove('success');
        } else if(input.classList.contains('error')) {
            input.classList.remove('error');
        }
    });
}

function removeInputsClass(input) {
    if(input.classList.contains('error')) {
        input.classList.remove('error');
    }
}

function inputsBlur(input) {

    input.addEventListener('blur', (e) => {
        input.classList.remove('active');

        if(input.value == false) {
            return
        } else {
            input.classList.add('success')
        }
    })

}

function onSubmit(inputs, form, formButtons, link) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let emptyNum = 0;

        for(let input of inputs) {
            if(input.value == false) {
                input.classList.add('error');
                emptyNum++;
            }
        }

        if(emptyNum !== 0) {
            formButtons.insertAdjacentHTML('beforeend', '<p class="sending-info" style="color:#b50404">Заповніть всі поля, будь ласка</p>')
            setTimeout( () => {
                document.querySelector('.sending-info').remove();
            }, 5000 )
            return;
        }

        const { currentTarget } = e;
        let action = link;
        sendForm(currentTarget, action, form)
            .then( response => onSucces(response, currentTarget, form) )
            .catch( reject => onError(reject, form) )
    })
}

function sendForm(currentForm, action, form) {
    if( document.querySelector('.sending-info') ) {
        document.querySelector('.sending-info').remove();
    }

    document.querySelector('.sending-loader').style.display = 'block';
    return fetch(action, setOptions(currentForm, form))
};

function setOptions(currentForm) {
    return {
        method: 'post',
        body: collectData(currentForm),
    }
};

function collectData(currentForm) {
    const data = new FormData(currentForm);
    return data;
};

function onSucces(response, form) {
    if( response.ok == false ) {
        throw 'Error'
    } else {
        console.log(response.json());
        showMassage(form)
    }
}

function showMassage(form) {
    setTimeout( () => { 
        document.querySelector('.sending-loader').style.display = 'none';
        document.querySelector('.form-buttons').insertAdjacentHTML('beforeend', '<p class="sending-info" style="color:#008037">Дякуємо за вашу пропозицію :)</p>') }, 1000 )

    setTimeout( () => { 
        if( document.querySelector('.sending-info') ) {
            document.querySelector('.sending-info').remove();
        }
     }, 10000 )
}

function onError(reject, form) {
    console.log(reject.json());
    setTimeout( () => { 
        document.querySelector('.sending-loader').style.display = 'none';
        document.querySelector('.form-buttons').insertAdjacentHTML('beforeend', '<p class="sending-info" style="color:#b50404">Не вдалося відправити, спробуйте ще раз</p>') }, 1000 )

    setTimeout( () => { 
        if( document.querySelector('.sending-info') ) {
            document.querySelector('.sending-info').remove();
        }
     }, 10000 )
}