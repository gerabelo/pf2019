import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question15',
  templateUrl: './question15.page.html',
  styleUrls: ['./question15.page.scss'],
})
export class Question15Page implements OnInit {

  constructor(private global: GlobalService) { }
  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    this.global.storageSet('15',value);
    this.global.gotoQuestion('16');
  }

}
