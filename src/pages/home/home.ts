import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks: FirebaseListObservable<any>;
  name: string;
  content: string;
  limit: Date;

  constructor(public navCtrl: NavController, angularFireDatabase: AngularFireDatabase) {
    this.tasks = angularFireDatabase.list('/items');
  }
  addTask() {
    this.tasks.push({
      name: this.name,
      content: this.content,
      limit: this.limit
    });
    this.content = "";
  }
}