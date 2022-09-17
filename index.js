import dogsData from './data.js'
import Character from './Dog.js'
import {header, startPage, ctaButtons, newUswerAccount, endPage} from './utility.js'

const main = document.getElementById("main")

let currentDogIndex = 0
let currentDog = new Character(dogsData[currentDogIndex])
let isWaiting = false

function getIntroPageHtml() {
    main.innerHTML = startPage()
}
getIntroPageHtml()

function getHeadersIconsDisplays() {
    const profileIcon = document.getElementById("profile-icon")
    const pawIcon = document.getElementById("paw-icon")
    const chatIcon = document.getElementById("chat-icon")

    pawIcon.addEventListener("click", setProfileHtml)
    chatIcon.addEventListener("click", chatIconDisplay)
    profileIcon.addEventListener("click", getNewUserAccountHtml)
}
getHeadersIconsDisplays()

function ctaListinersAttachement() {
    const cross = document.getElementById("cross-btn")
    const heart = document.getElementById("heart-btn")

    cross.addEventListener("click", renderCrossBadge)
    heart.addEventListener("click", renderHeartBadge) 

    getHeadersIconsDisplays()   
}

function setProfileHtml() {
    render()
    getHeadersIconsDisplays()
    ctaListinersAttachement()
    getStartedListinerAttachement()
}

function chatIconDisplay() {
    getIntroPageHtml()
    getHeadersIconsDisplays()
    getStartedListinerAttachement()
}

function getNewUserAccountHtml() {
    main.innerHTML = newUswerAccount()
    getHeadersIconsDisplays()
    getStartedListinerAttachement()
}

function getStartedListinerAttachement() {
    const cta = document.getElementById("cta")
    cta.addEventListener("click", getStarted)
}
getStartedListinerAttachement()

function getStarted() {
    render()
    ctaListinersAttachement()
}

function nextProfileHtml() {
    if(!isWaiting) {
        if(currentDog.swiped || currentDog.liked) {
            isWaiting = true

            // display the next profile
            if(currentDogIndex < dogsData.length - 1) {
                setTimeout(()=> {
                    currentDogIndex++
                    currentDog = new Character(dogsData[currentDogIndex])
                    render()
                    ctaListinersAttachement()
                    isWaiting = false
                }, 1000)
            } else {
                setTimeout(()=>{
                    main.innerHTML = endPage()
                }, 1000)
            }
        }
    }
}

function renderCrossBadge() {
    main.innerHTML += currentDog.getCrossBadgeHtml()
    currentDog.swiped = true
    nextProfileHtml()
}

function renderHeartBadge() {
    main.innerHTML += currentDog.getHeartBadgeHtml()
    currentDog.liked = true
    nextProfileHtml()
}

function render() {
    main.innerHTML = header()
    main.innerHTML += currentDog.getDogHtml()
    main.innerHTML += ctaButtons()
}
