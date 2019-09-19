import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.page.html',
  styleUrls: ['./question7.page.scss'],
})
export class Question7Page implements OnInit {

  constructor(private global: GlobalService) { }

  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    this.global.storageSet('07',value);
    this.global.gotoQuestion('8');
  }
}
