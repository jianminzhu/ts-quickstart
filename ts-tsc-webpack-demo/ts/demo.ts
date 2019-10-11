import { User}   from "./User"  
import * as c from "./config" 
function main(){
    let user = new User(c.name,c.age)
    user.showAge();
    user.showName(); 
}

export  {
    main  
} 
 