import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service'

@Component({
  selector: 'app-question2',
  templateUrl: './question2.page.html',
  styleUrls: ['./question2.page.scss'],
})
export class Question2Page implements OnInit {

  constructor(
    private global: GlobalService
  ) {}

  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    this.global.storageSet('02',value);
    if (value == 0) {
      this.global.storageSet('99',new Date().toISOString());
      this.global.presentToast("Agradeça e Encerre")
      this.global.gotoHome()
    } else {
      this.global.gotoQuestion('3')
    }
  }
}
