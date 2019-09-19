import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question9',
  templateUrl: './question9.page.html',
  styleUrls: ['./question9.page.scss'],
})
export class Question9Page implements OnInit {

  constructor(private global: GlobalService) { }

  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    if (value == 7) {
      this.global.gotoQuestion('8a');
    } else {
      this.global.storageSet('09',value);
      this.global.gotoQuestion('10');
    }
  }
}
