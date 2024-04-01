import Duck from "./Duck";
import Quack from "./Quack";
import Squeak from "./Squeak";

export default class BabyDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Squeak();

    }
}