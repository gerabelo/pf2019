import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question14a',
  templateUrl: './question14a.page.html',
  styleUrls: ['./question14a.page.scss'],
})
export class Question14aPage implements OnInit {

  constructor(private global: GlobalService) { }
  candidato: string;

  prosseguir(){
    if (this.candidato == null) {
      this.global.presentToast("Confirme o candidato!")
    } else {
      this.global.storageSet('14',this.candidato);
      this.global.gotoQuestion('15');
    }    
  }
  ngOnInit() {
  }

}
