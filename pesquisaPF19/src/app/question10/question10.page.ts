import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.page.html',
  styleUrls: ['./question10.page.scss'],
})
export class Question10Page implements OnInit {

  constructor(private global: GlobalService) { }

  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    this.global.storageSet('10',value);
    this.global.gotoQuestion('11');
  }
}
