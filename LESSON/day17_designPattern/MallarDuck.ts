import Duck from "./Duck";
import Quack from "./Quack";

export default class MallarDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();

    }
}