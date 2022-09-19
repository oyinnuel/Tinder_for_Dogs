class Character {
    constructor(dogsData) {
        Object.assign(this, dogsData)

        this.swiped = this.hasBeenSwiped
        this.liked = this.hasBeenLiked
    }

    getCrossBadgeHtml() {
        return `
            <div>
                <img class="badge" src="images/badge-nope.png">
            </div>`
    }

    getHeartBadgeHtml() {
        return `
            <div>
                <img class="badge" src="images/badge-like.png">
            </div>`
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div>
                <img class="dog" src="${avatar}">
                <h2 class="position name"> ${name}, ${age} </h2>
                <p class="position bio">${bio}</p>
            </div>`
    }
}

export default Character
