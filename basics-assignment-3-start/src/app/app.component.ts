import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecretPassword = false;
  buttonClicks = [];

  onPasswordButton(){
    this.showSecretPassword = !this.showSecretPassword
    this.buttonClicks.push(Date.now());
    console.log(Date.now());
  }

  getColor(index: number){
    console.log(index);
    if(index > 3)
      return "blue";
  }
}
