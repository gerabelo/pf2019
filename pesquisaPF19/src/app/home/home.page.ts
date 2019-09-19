import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

// import { File } from '@ionic-native/file ';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private global: GlobalService,
    // private file: File
  ) {
    // this.sendDataFlag = this.global.getSendDataFlag();
    // console.log(this.sendDataFlag)
  }

  operator: string;
  sendDataFlag: boolean;

  ngOnInit() {
    if (this.global.checkOperator()) {
      console.log("OK")
      
    } else {
      this.global.gotoLogin()
    }
  }

  ionViewWillEnter() {
    this.sendDataFlag = this.global.getSendDataFlag();
  }

  novaEntrevista() {
    this.global.novaEntrevista(new Date().toISOString());    
    console.log(this.global.questionaryId)
    this.global.gotoQuestion('1')
  }

  logout() {
    this.global.setOperator(null)
    this.global.gotoLogin()
  }

  gotoResultados() {
    let resultados = []
    this.global.storageGetAll().then((d) => {
      for (let i=0;i < d[0].length;i++) {
        console.log(d[0][i]+'_'+d[1][i])
        resultados.push(String(d[0][i])+'_'+String(d[1][i]))
      }
      this.global.setResultados(resultados)
    });
    this.global.gotoResultados();
  }

  enviarResultados() {
    let resultados = []
    this.global.storageGetAll().then((d) => {
      for (let i=0;i < d[0].length;i++) {
        console.log(d[0][i]+'_'+d[1][i])
        resultados.push(String(d[0][i])+'_'+String(d[1][i]))
      }
      this.global.setResultados(resultados)
      this.global.sendResultados(resultados,this.global.operator);
    });    
  }

  // createLogFileAndWrite(text: string) {
  //   this.file.checkFile(this.file.dataDirectory, 'PF2019CAJUIDEAS.log')
  //   .then(doesExist => {
  //       return this.writeToLogFile(text);
  //   }).catch(err => {
  //       return this.file.createFile(this.file.dataDirectory, 'PF2019CAJUIDEAS.log', false)
  //           .then(FileEntry => this.writeToLogFile(text))
  //           // .catch(err => alert('Error creating the log file '+ JSON.stringify(err)));
  //           .catch(err => this.global.presentToast('Error creating the log file '+ JSON.stringify(err)));
  //   });
  // }

  // writeToLogFile(text: string) {
  //   this.file.writeFile(this.file.dataDirectory, 'PF2019CAJUIDEAS.log', text, {append: true, replace: false})
  // }
}

