class Robot {
    static id = 0;
    constructor() {
        this.name = 'Robot'
        Robot.id ++;
    }
    getId() {
        return Robot.id;
    }
    static doSthing(){
        console.log(`Hello my name is ${this.name}`);
    }
}
module.exports = Robot;
