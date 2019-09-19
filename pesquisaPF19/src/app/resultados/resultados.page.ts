import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
// import { File } from '@ionic-native/file';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  public data: string[] = ["Pesquisador/Entrevista/Pergunta/Resposta"]

  constructor(
    private global: GlobalService,
    // private file: File
  ) { 
  }

  ngOnInit() {
    
  }

  ionViewDidEnter() {  
    let resultados: string[] = []
    if (this.global.checkOperator()) {
      console.log("OK");
      resultados = this.global.getResultados()
      for (let i=0;i<resultados.length;i++) {
        this.data.push(resultados[i])
      }
    } else {
      this.global.gotoLogin()
    }    
  }
}
