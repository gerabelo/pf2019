import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question18',
  templateUrl: './question18.page.html',
  styleUrls: ['./question18.page.scss'],
})
export class Question18Page implements OnInit {

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


  radioChecked(){
    this.global.storageSet('18',this.nome);
    this.global.storageSet('19',this.telefone);
    this.global.storageSet('20',this.bairro);
    this.global.storageSet('21',this.global.geoLatitude);
    this.global.storageSet('22',this.global.geoLongitude);
    this.global.storageSet('23',this.global.geoAccuracy);
    this.global.storageSet('99',new Date().toISOString());
    this.global.gotoHome();
  }

}
