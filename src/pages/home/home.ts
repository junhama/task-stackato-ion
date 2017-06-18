import { Component } from '@angular/core';
 
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  talks: FirebaseListObservable<any>;
 
  constructor(public navCtrl: NavController, angularFireDatabase: AngularFireDatabase) {
    this.talks = angularFireDatabase.list('/items');
  }
 
}