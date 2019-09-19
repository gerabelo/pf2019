import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.page.html',
  styleUrls: ['./question3.page.scss'],
})
export class Question3Page implements OnInit {

  constructor(
    private global: GlobalService
  ) { }

  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    this.global.storageSet('03',value);
    if (value == 0) {
      this.global.storageSet('99',new Date().toISOString());
      this.global.presentToast("Agradeça e Encerre")
      this.global.gotoHome()
    } else {
      this.global.gotoQuestion('4')
    }
  }

}
