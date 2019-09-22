import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-question11a',
  templateUrl: './question11a.page.html',
  styleUrls: ['./question11a.page.scss'],
})
export class Question11aPage implements OnInit {

  constructor(
    private global: GlobalService,
    private alertCtrl: AlertController
  ) { }

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
    if (this.global.checkOperator()) {
      console.log("OK")
    } else {
      this.global.gotoLogin()
    }

  }

  private async sair() {
    const alertAbortar = await this.alertCtrl.create({
      backdropDismiss: false,
      header: `Deseja ABORTAR esta entrevista?`, 
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'alert-cancel',
          handler: () => {}
        },
        {
          text: 'Sim',
          handler: () => {
            this.global.presentToast("A entrevista foi ABORTADA.")
            this.global.storageSet('18','ABORTADO');
            this.global.storageSet('99',new Date().toISOString());
            this.global.gotoHome();        
          }
        }
      ]
    });
    return await alertAbortar.present();
  }
}
