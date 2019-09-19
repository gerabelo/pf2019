import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.page.html',
  styleUrls: ['./question4.page.scss'],
})
export class Question4Page implements OnInit {

  constructor(private global: GlobalService) { }

  idade: number;

  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }

  prosseguir(){
    if (this.idade > 15) {
      this.global.storageSet('04',this.idade);
      this.global.gotoQuestion('5');
    } else {
      this.global.storageSet('04',this.idade);
      this.global.storageSet('99',new Date().toISOString());
      this.global.presentToast("Agradeça e Encerre");
      this.global.gotoHome()
    }
  }

}
