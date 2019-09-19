import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question13a',
  templateUrl: './question13a.page.html',
  styleUrls: ['./question13a.page.scss'],
})
export class Question13aPage implements OnInit {

  constructor(private global: GlobalService) { }

  problema: string;

  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  prosseguir(){
      this.global.storageSet('13',this.problema);
      this.global.gotoQuestion('14');
  }
}
