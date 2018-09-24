export class CounterService{
    activeToInactiveCounter: number = 0;
    inactiveToActiveCounter: number = 0;

    /** Increments counter when an active user is inactivated */
    userActivated(){
        this.activeToInactiveCounter++;
        console.log('Active to inactive changes: ' + this.activeToInactiveCounter);
    }

    /** Increments counter when an inactive user is activated */
    userInactivated(){
        this.inactiveToActiveCounter++;
        console.log('Inactive to active changes: ' + this.inactiveToActiveCounter);
    }
}