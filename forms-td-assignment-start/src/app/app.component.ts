import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro'];

  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
