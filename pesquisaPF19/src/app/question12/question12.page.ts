import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question12',
  templateUrl: './question12.page.html',
  styleUrls: ['./question12.page.scss'],
})
export class Question12Page implements OnInit {

  constructor(private global: GlobalService) { }
  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    this.global.storageSet('12',value);
    this.global.gotoQuestion('13');
  }

}
