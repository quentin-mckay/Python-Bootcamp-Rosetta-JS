// ES6 class
class Comment {
    constructor(username, text, likes=0) {
        this.username = username
        this.text = text
        this.likes = likes
    }
}


// === tests ===
let c = new Comment("davey123", "lol you're so silly", 5)
console.log(c)