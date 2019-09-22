import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Geoposition, Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, Platform, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  subscribe: any;

  constructor(
    private global: GlobalService,
    private geolocation: Geolocation,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private platform: Platform,
    private toastCtrl: ToastController
  ) {
    // this.subscribe = this.platform.backButton.subscribeWithPriority(6666666,() => {
    //   if (this.constructor.name == "LoginPage") {
    //     if (window.confirm("Deseja realmente SAIR da aplicação?")) {
    //       navigator["app"].exitApp();
    //     }
    //   }
    // })
  }

  ngOnInit() {
    // this.getGeolocation();
    if (this.global.checkOperator()) {
      this.global.gotoHome()
    }
  }

  onPageWillEnter() {
    this.operator = "";
  }

  operator: string = "";

  public login() {
    if (this.operator == "") {
      this.global.presentToast("Digite o nome do pesquisador")
    } else {
      if (this.operator == 'ClearAllData') {
        this.global.presentToast("Todos os dados locais foram removidos")
        this.global.storageClear();
        this.operator = null
        this.global.gotoLogin();
      } else {
        if (this.operator == 'SendAllData') {
          let resultados = []
          this.global.storageGetAll().then((d) => {
            for (let i=0;i < d[0].length;i++) {
              console.log(d[0][i]+'_'+d[1][i])
              resultados.push(String(d[0][i])+'_'+String(d[1][i]))
            }
            this.global.setResultados(resultados)
            this.global.sendResultados(resultados,"http://192.168.0.180");
          });          
        } else {
          if (this.operator.substring(0,7) == "http://") {
            this.global.enableSendData()
          } else {
            this.global.disableSendData()
          }
          this.global.setOperator(this.operator);
          this.global.gotoHome();    
        }
      }
    }   
  }

  async getGeolocation()
  {
    this.geolocation.getCurrentPosition().then(
      (resp) => {
        this.global.setLat(resp.coords.latitude);
        this.global.setLng(resp.coords.longitude);
        this.global.setAcc(resp.coords.accuracy);
    }).catch((error) => { 
      let watchOptions = {
        timeout : 3000,
        maxAge: 0,
        enableHighAccuracy: true
      }

      var watchID = navigator.geolocation.watchPosition((position) => {
        if ((position as Geoposition).coords != undefined) {
          var geoposition = (position as Geoposition);
          this.global.storageSet('19',geoposition.coords.latitude);
          this.global.storageSet('20',geoposition.coords.longitude);
          this.global.storageSet('21',geoposition.coords.accuracy);
        } else {
          this.global.presentToast('falha ao obter posicao')
        }
        navigator.geolocation.clearWatch(watchID);
      }, null , { enableHighAccuracy: true });
        
      // var watchID = this.geolocation.watchPosition(watchOptions);
      // watchID.subscribe((position) => {
      //   if ((position as Geoposition).coords != undefined) {
      //     var geoposition = (position as Geoposition);
        //   this.global.storageSet('19',geoposition.coords.latitude);
        //   this.global.storageSet('20',geoposition.coords.longitude);
        //   this.global.storageSet('21',geoposition.coords.accuracy);
        // } else {
      //     this.global.presentToast('falha ao obter posicao')
      //   }
      // });
    });    
  }

  
private sair() {
    if (window.confirm("Deseja realmente SAIR da aplicação?")) {
      navigator["app"].exitApp();
    }
  }
}
