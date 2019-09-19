import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service'

@Component({
  selector: 'app-question1',
  templateUrl: './question1.page.html',
  styleUrls: ['./question1.page.scss'],
})
export class Question1Page implements OnInit {

  constructor(
    private global: GlobalService) { }

    ngOnInit() {
      if (this.global.checkOperator()) {
        console.log("OK")
      } else {
        this.global.gotoLogin()
      }
    }

    radioChecked(value){
    this.global.storageSet('01',value);
    if (value == 0) {
      this.global.storageSet('99',new Date().toISOString());
      this.global.presentToast("Agradeça e Encerre")
      this.global.gotoHome()
    } else {
      this.global.gotoQuestion('2')
    }
  }
}
