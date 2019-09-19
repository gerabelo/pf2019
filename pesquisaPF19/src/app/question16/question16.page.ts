import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question16',
  templateUrl: './question16.page.html',
  styleUrls: ['./question16.page.scss'],
})
export class Question16Page implements OnInit {

  constructor(private global: GlobalService) { }
  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }
  }
  nome: string;
  telefone: string;
  bairro: string;


  radioChecked(value){
    this.global.storageSet('16',value);
    this.global.gotoQuestion('17');
  }
}
