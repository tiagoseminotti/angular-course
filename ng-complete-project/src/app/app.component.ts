import { Component, OnInit } from '@angular/core';
import { headerItem } from './shared/header-item.enum';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDjpNtZQ7ewD6T8GiWG0CNZaRihavMNrZc",
      authDomain: "angular-complete-project.firebaseapp.com",
      databaseURL: "https://angular-complete-project.firebaseio.com",
      projectId: "angular-complete-project",
      storageBucket: "angular-complete-project.appspot.com",
      messagingSenderId: "525804994461"
    });
  }
}
