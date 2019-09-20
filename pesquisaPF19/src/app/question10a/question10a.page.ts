import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question10a',
  templateUrl: './question10a.page.html',
  styleUrls: ['./question10a.page.scss'],
})
export class Question10aPage implements OnInit {
  candidato: string;

  prosseguir(){
    if (this.candidato == null) {
      this.global.presentToast("Confirme o candidato!")
    } else {
      this.global.storageSet('10',this.candidato);
      this.global.gotoQuestion('11');
    }    
  }
  constructor(private global: GlobalService) { }

  ngOnInit() {
  }

}
