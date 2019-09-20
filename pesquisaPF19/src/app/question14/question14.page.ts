import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question14',
  templateUrl: './question14.page.html',
  styleUrls: ['./question14.page.scss'],
})
export class Question14Page implements OnInit {
  slideOpts = {
    loop: true,
    autoplay:true,
    // initialSlide: 1,
    speed: 400
  };
  
  constructor(private global: GlobalService) { }
  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  radioChecked(value){
    this.global.storageSet('14',value);
    this.global.gotoQuestion('15');
  }
}
