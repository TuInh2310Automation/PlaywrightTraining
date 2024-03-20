import RobotCat from "./RobotCat";


export default class SolarRobotCat extends RobotCat {
    constructor() {
        super("Solar robot cat")
        this.id = this.somethingRandom();
    }
    private somethingRandom():number {
        return 1;
    }
    charge(): string {
        return super.charge() + "with solar circuit"
    }
}