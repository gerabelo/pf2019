import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.page.html',
  styleUrls: ['./question5.page.scss'],
})
export class Question5Page implements OnInit {

  constructor(private global: GlobalService) { }

  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    this.global.storageSet('05',value);
    this.global.gotoQuestion('6');
  }
}
