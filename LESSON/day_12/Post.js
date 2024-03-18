class Post {
    constructor(id, body) {
        this._id = id;
        this._body = body;
    }


    get id() {
        return this._id;
    }

    set id(id) {
        return this._id = id;

    }
    get body() {
        return this._body;
    }

    set body(body) {
        return this._body = body;
    }
}
module.exports = Post