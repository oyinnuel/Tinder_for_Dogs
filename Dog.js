function Character(dogsData) {
    Object.assign(this, dogsData)

    this.swiped = this.hasBeenSwiped
    this.liked = this.hasBeenLiked

    this.getCrossBadgeHtml = function() {
        return `
            <div>
                <img class="badge" src="images/badge-nope.png">
            </div>`
    }

    this.getHeartBadgeHtml = function() {
        return `
            <div>
                <img class="badge" src="images/badge-like.png">
            </div>`
    }

    this.getDogHtml = function() {
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
