import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-question16',
  templateUrl: './question16.page.html',
  styleUrls: ['./question16.page.scss'],
})
export class Question16Page implements OnInit {

  constructor(
    private global: GlobalService,
    private alertCtrl: AlertController
  ) { }
  
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
