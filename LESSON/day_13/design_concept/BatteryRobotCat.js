const RobotCat = require("./RoborCat");

// IS - A 
class BatteryRobotCat extends RobotCat{

     charge() {
        return super.charge() + 'with battery curcuit';
    }
}
module.exports = BatteryRobotCat;