import FlyBehavior from "./FlyBehavior";

export default class FlyWithWing implements FlyBehavior {
    fly(): void {
        console.log('im flying');
        
    }

}