import dogsData from './data.js'
import Character from './Dog.js'
import {header, startPage, ctaButtons, mains, endPage} from './utility.js'

const main = document.getElementById("main")
let cross 
let heart 
// const cta = document.getElementById("cta")

let currentDogIndex = 0
let currentDog = new Character(dogsData[currentDogIndex])
let isWaiting = false

function getIntroPageHtml() {
    console.log("getIntroPageHtml is working")
    main.innerHTML = startPage()
}
getIntroPageHtml() 

document.getElementById("cta").addEventListener("click", getStarted)

function getStarted() {
    
    console.log("getStarted is working")
    main.innerHTML = header()
    render()
    main.innerHTML += ctaButtons()
    // main.innerHTML = currentDog.mains()

    cross = document.getElementById("cross-btn")
    heart = document.getElementById("heart-btn")

    cross.addEventListener("click", renderCrossBadge)
    heart.addEventListener("click", renderHeartBadge) 
}


function nextProfileHtml() {
    if(!isWaiting) {
        if(currentDog.swiped || currentDog.liked) {
            console.log(`nextProfileHtml is working and currentDogIndex = ${currentDogIndex}`)
            isWaiting = true
            // display the next profile
            if(currentDogIndex < dogsData.length - 1) {
                setTimeout(()=> {
                    console.log("setTimeout is working")
                    currentDogIndex++
                    console.log(`currentDogIndex = ${currentDogIndex}`)
                    currentDog = new Character(dogsData[currentDogIndex])
                    main.innerHTML = header()
                    render()
                    main.innerHTML += ctaButtons()
                    // main.innerHTML = currentDog.mains()
                    isWaiting = false
                }, 1000)
            } else {
                setTimeout(()=> {
                    console.log("endPage initialized")
                    console.log(startPage())
                    currentDog = endPage()
                    main.innerHTML = currentDog
                }, 1000)
            }
            
        }
    }
}

function renderCrossBadge() {
    // main.removeAttribute("class")
    console.log("renderCrossBadge is working")

    main.innerHTML += currentDog.getCrossBadgeHtml()
    currentDog.swiped = true
    nextProfileHtml()
}

function renderHeartBadge() {
    console.log("renderHeartBadge is working")

    main.innerHTML += currentDog.getHeartBadgeHtml()
    currentDog.liked = true
    nextProfileHtml()
}

function render() {
    main.innerHTML += currentDog.getDogHtml()
}

// render()

export default render