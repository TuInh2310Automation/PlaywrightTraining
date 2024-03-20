import BatteryRobotCat from "./BatteryRobotCat";
import { charge } from "./Charger";
import SolarRobotCat from "./SolarRobotCat";
const solarRobotCat = new SolarRobotCat();
const batteryRobotCat = new BatteryRobotCat("Batter")

charge([solarRobotCat, batteryRobotCat]);