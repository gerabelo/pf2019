import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question17',
  templateUrl: './question17.page.html',
  styleUrls: ['./question17.page.scss'],
})
export class Question17Page implements OnInit {

  constructor(private global: GlobalService) { }
  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    this.global.storageSet('17',value);
    this.global.gotoQuestion('18');
  }
}
