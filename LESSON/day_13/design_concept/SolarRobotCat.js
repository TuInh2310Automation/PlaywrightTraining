const RobotCat = require("./RoborCat");

// IS - A 
class SolarRobotCat extends RobotCat{

     charge() {
        return super.charge() + 'with solar curcuit';
    }
}
module.exports = SolarRobotCat;