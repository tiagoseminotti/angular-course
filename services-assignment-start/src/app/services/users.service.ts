import { Injectable } from "@angular/core";
import { CounterService } from './counter.service';

@Injectable()
export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService){}
    
    setUserStatus(id: number, active: boolean) {
        if(active){
            this.activeUsers.push(this.inactiveUsers[id]);
            this.inactiveUsers.splice(id, 1);
            this.counterService.userActivated();
        }
        else{
            this.inactiveUsers.push(this.activeUsers[id]);
            this.activeUsers.splice(id, 1);
            this.counterService.userInactivated();
        }
    }
}