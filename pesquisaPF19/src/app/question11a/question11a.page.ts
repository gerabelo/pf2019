import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-question11a',
  templateUrl: './question11a.page.html',
  styleUrls: ['./question11a.page.scss'],
})
export class Question11aPage implements OnInit {

  constructor(private global: GlobalService) { }
  candidato: string;

  prosseguir(){
    if (this.candidato == null) {
      this.global.presentToast("Confirme o candidato!")
    } else {
      this.global.storageSet('11',this.candidato);
      this.global.gotoQuestion('12');
    }    
  }
  ngOnInit() {
  }

}
