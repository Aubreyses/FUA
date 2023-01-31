export const scroll = () => {

    scrolling('.arrow', 'header');

}

function scrolling (trigger, target) {
    const scrollButton = document.querySelector(trigger)
    const scrollTarget = document.querySelector(target)

    scrollButton.addEventListener('click', (e) => {
        scrollTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}