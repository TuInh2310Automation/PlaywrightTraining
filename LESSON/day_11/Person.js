class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name;
    }

    set name(name){
        return this._name = name;
    }

    get age(){
        return this._age;
    }

    set age(age){
        return this._age = age;
    }
}
module.exports = Person