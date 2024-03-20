export default class RobotCat {
     name: string;
     id: number;
    constructor(name: string) {
         this.name = name;
    }
    setId(id:number) : void {
        this.id = id;
    }
    getId(): number {
        return this.id
    }

     charge() {
       return 'charging...'
    }
}
