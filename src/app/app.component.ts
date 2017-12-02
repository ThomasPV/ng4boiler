import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyBP0Dliw3rdg7jeJk7Q6rnbdilAGiv6OZo",
      authDomain: "angular5-54155.firebaseapp.com"
    });

  }

}
