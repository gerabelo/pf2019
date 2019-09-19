import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question8',
  templateUrl: './question8.page.html',
  styleUrls: ['./question8.page.scss'],
})
export class Question8Page implements OnInit {

  constructor(private global: GlobalService) { }

  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    this.global.storageSet('08',value);
    this.global.gotoQuestion('9');
  }
}
