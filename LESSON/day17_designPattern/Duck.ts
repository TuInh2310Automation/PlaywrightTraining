import FlyBehavior from "./FlyBehavior";
import FlyWithWing from "./FlyWithWing";
import Quack from "./Quack";
import QuackBehavior from "./QuackBehavior";

export default class Duck {
    protected flyBehavior: FlyBehavior = new FlyWithWing();
    protected quackBehavior: QuackBehavior = new Quack();

    performQuack() {
        this.quackBehavior.quack();
    }
}