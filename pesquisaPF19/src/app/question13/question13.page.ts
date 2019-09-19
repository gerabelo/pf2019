import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question13',
  templateUrl: './question13.page.html',
  styleUrls: ['./question13.page.scss'],
})
export class Question13Page implements OnInit {

  constructor(private global: GlobalService) { }
  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    if (value == 6) {
      this.global.gotoQuestion('13a');
    } else {
      this.global.storageSet('13',value);
      this.global.gotoQuestion('14');
    }
  }
}
