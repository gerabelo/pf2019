import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-question14',
  templateUrl: './question14.page.html',
  styleUrls: ['./question14.page.scss'],
})
export class Question14Page implements OnInit {
  slideOpts = {
    loop: true,
    autoplay:true,
    initialSlide: 1,
    speed: 400
  };
  
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

  radioChecked(value){
    if (value == 7) {
      this.global.storageSet('14',value);
      this.global.gotoQuestion('14a');  
    } else {
      this.global.storageSet('14',value);
      this.global.gotoQuestion('15');  
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
