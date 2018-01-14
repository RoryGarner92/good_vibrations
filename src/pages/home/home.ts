import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private vibration: Vibration, public navCtrl: NavController) {

  }
vibrate(){
  this.vibration.vibrate([1000,5000,10000]);
}

}
