function header() {
    return `
        <header>
            <img class="header-icon profile-icon" id="profile-icon" src="images/icon-profile.png">
            <img class="header-icon paw-icon" id="paw-icon" src="images/paw-icon.svg">
            <img class="header-icon chat-icon" id="chat-icon" src="images/icon-chat.png">
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

function newUswerAccount() {
    
    return `
        ${header()}

        <div class="styled-page">
            <h2 class="welcome"> Welcome to Tender Tinder! </h2>
            <p class="question-text"> Kindly enter your user name and password </p> 
            <img class="start-image styled-image" src="images/begining_image.png">
            <p class="contemplation-text"> Do you have an existing account? If yes </p>
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

function endPage() {
    return `
        ${header()}
        
        <div class="styled-page">
            <p>Congratulations!</p>
            <img class="end-image" src="images/end_image.png">
            <p>You have reached the end of this catalog.</p> 
            <p>Thank you for your participation</p>
        </div>
    `
}

export { header, startPage, endPage, ctaButtons, newUswerAccount }
