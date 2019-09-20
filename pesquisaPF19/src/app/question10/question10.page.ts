import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.page.html',
  styleUrls: ['./question10.page.scss'],
})
export class Question10Page implements OnInit {
  slideOpts = {
    loop: true,
    autoplay:true,
    initialSlide: 1,
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
    if (value == 7) {
      this.global.storageSet('10',value);
      this.global.gotoQuestion('10a');
    } else {
      this.global.storageSet('10',value);
      this.global.gotoQuestion('11');  
    }
  }
}
