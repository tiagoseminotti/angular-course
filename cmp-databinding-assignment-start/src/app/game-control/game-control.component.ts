import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() intervalAchieved = new EventEmitter<{interval: number}>();
  gameStarted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    //Checks if game is already started
    if (!this.gameStarted){
      this.gameStarted = true;
      let interval: number = 0;
      //Triggers event once per second
      this.interval = setInterval(() => {
        this.intervalAchieved.emit({interval: interval})
        interval++;
      }, 1000);

      console.log('Game started');
    }
  }

  stopGame(){
    if(this.gameStarted){
      this.gameStarted = false;
      clearInterval(this.interval);

      console.log('Game stopped');
    }
  }
}
