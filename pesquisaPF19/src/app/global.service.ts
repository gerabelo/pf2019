import { Injectable } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpParams, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private toastController: ToastController,
    private navCtrl: NavController,
    private storage: Storage,
    public http: HttpClient
  ) { }

  public operator: string;
  public questionaryId: string;
  public resultados: string[];
  public geoLatitude: number;
  public geoLongitude: number;
  public geoAccuracy: number;
  public sendDataFlag: boolean;
  // public url: string = 'http://192.168.0.180'; //receptacao
  // public url: string = 'http://localhost:3000';

  public async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  gotoQuestion(value) {
    this.navCtrl.navigateForward('/question'+value);
  }

  gotoHome() {
    this.navCtrl.navigateForward('/home');
  }

  gotoLogin() {
    this.navCtrl.navigateForward('/login');
  }

  gotoResultados() {
    this.navCtrl.navigateForward('/resultados');
  }

  storageSet(key,value) {
    try {
      this.storage.set(this.operator+'_'+this.questionaryId+'_'+key,value)
      return true
    } catch (error) {
      return false
    }    
  }

  storageGet(key) {
    this.storage.get(key).then((value) => {
      return value
    })
  }

  setOperator(value) {
    this.operator = value;
  }

  checkOperator() {
    if (this.operator) {
      return true
    } else return false
  }

  storageGetAll() {
    let perguntas = []
    let respostas = []
    var promise = new Promise((resolve, reject) => {
      this.storage.forEach((value, key, index) => {
        perguntas.push(key);
        respostas.push(value);
      }).then((d) => {
        resolve([perguntas,respostas]);
      });
    });
    return promise;
  }

  storageClear() {
    this.storage.clear()
  }

  setResultados(value) {
    this.resultados = value;
  }

  getResultados() {
    return this.resultados;
  }

  sendResultados(data,url) {
    console.log(data)
    this.http.post(url+'/questionarios/', { data }).subscribe(data => {
      this.presentToast("Dados enviados com sucesso")
     }, error => {
      this.presentToast("Ocorreu uma falha ao enviar os dados.")
      this.http.get(url+'/questionarios/?data='+data).subscribe(data => {
        this.presentToast("Dados enviados com sucesso");
      }, error => {
        this.presentToast("Ocorreu uma falha ao enviar os dados.")
      });      
    }); 
  }

  novaEntrevista(data) {
    this.storage.get('00').then((quantidade_entrevistas)=>{
      if (quantidade_entrevistas == null) {
        quantidade_entrevistas = 1
        this.storage.set('00',quantidade_entrevistas)
      } else {
        quantidade_entrevistas += 1;
        this.storage.set('00',quantidade_entrevistas)
      }
      this.questionaryId = quantidade_entrevistas;
      this.storageSet('99',0)
      this.storageSet('98',data)
    })
  }

  setLat(value) {
    this.geoLatitude = value
  }

  setLng(value) {
    this.geoLongitude = value
  }

  setAcc(value) {
    this.geoAccuracy = value
  }

  enableSendData() {
    this.sendDataFlag = true;
  }

  disableSendData() {
    this.sendDataFlag = false;
  }

  getSendDataFlag() {
    return this.sendDataFlag;
  }
}
