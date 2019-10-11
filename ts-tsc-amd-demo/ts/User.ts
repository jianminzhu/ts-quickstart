 
export class User{
    constructor(public name:String,public age:Number){ 
    }
    showName() {
        console.log(this.name);
    }
    showAge() {
        console.log(this.age);
    }
}
   