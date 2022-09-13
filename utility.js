import render from './index.js'

function header() {
    return `
        <header>
            <img class="header-icon" src="images/icon-profile.png">
            <img class="header-icon paw" src="images/paw-icon.svg">
            <img class="header-icon" src="images/icon-chat.png">
        </header>
    `
}

function startPage() {
    
    return `
        ${header()}

        <div class="styled-page">
            <h2 class="welcome"> Welcome to Tender Tinder! </h2>
            <img class="start-image styled-image" src="images/begining_image.png">
            <p class="question-text"> Do you seek for a perfect friend for your dog? </p> 
            <p class="contemplation-text"> if yes </p>
            <button class="get-started-btn" id="cta"> Get Started </button>
        </div>
    `
}

function ctaButtons() {
    return `
        <section>
            <div class="buttons">
                <button class="cross-btn action-btn" id="cross-btn">
                    <img class="cross" src="images/icon-cross.png">
                </button>

                <button class="heart-btn action-btn" id="heart-btn">
                    <img class="heart" src="images/icon-heart.png">
                </button>
            </div>
        </section>
    `
}

function mains() {
    return `
        ${header()}
        ${render()}
        ${ctaButtons()}
    `
}

function endPage() {
    return `
        ${header()}
        
        <div class="styled-page">
            <p>Congratulations!</p>
            <img class="end-image" src="images/end_image.PNG">
            <p>You have reached the end of this catalog.</p> 
            <p>Thank you for your participation</p>
        </div>
    `
}

export { header, startPage, endPage, mains, ctaButtons }