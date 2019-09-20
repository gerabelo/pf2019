import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question11',
  templateUrl: './question11.page.html',
  styleUrls: ['./question11.page.scss'],
})
export class Question11Page implements OnInit {
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
    this.global.storageSet('11',value);
    this.global.gotoQuestion('12');
  }
}
