import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'question1', loadChildren: './question1/question1.module#Question1PageModule' },
  { path: 'question2', loadChildren: './question2/question2.module#Question2PageModule' },
  { path: 'question3', loadChildren: './question3/question3.module#Question3PageModule' },
  { path: 'question4', loadChildren: './question4/question4.module#Question4PageModule' },
  { path: 'question5', loadChildren: './question5/question5.module#Question5PageModule' },
  { path: 'question6', loadChildren: './question6/question6.module#Question6PageModule' },
  { path: 'question7', loadChildren: './question7/question7.module#Question7PageModule' },
  { path: 'question8', loadChildren: './question8/question8.module#Question8PageModule' },
  { path: 'question9', loadChildren: './question9/question9.module#Question9PageModule' },
  { path: 'question10', loadChildren: './question10/question10.module#Question10PageModule' },
  { path: 'question11', loadChildren: './question11/question11.module#Question11PageModule' },
  { path: 'question12', loadChildren: './question12/question12.module#Question12PageModule' },
  { path: 'question13', loadChildren: './question13/question13.module#Question13PageModule' },
  { path: 'question14', loadChildren: './question14/question14.module#Question14PageModule' },
  { path: 'question15', loadChildren: './question15/question15.module#Question15PageModule' },
  { path: 'question16', loadChildren: './question16/question16.module#Question16PageModule' },
  { path: 'resultados', loadChildren: './resultados/resultados.module#ResultadosPageModule' },
  { path: 'question8a', loadChildren: './question8a/question8a.module#Question8aPageModule' },
  { path: 'question17', loadChildren: './question17/question17.module#Question17PageModule' },
  { path: 'question18', loadChildren: './question18/question18.module#Question18PageModule' },
  { path: 'question13a', loadChildren: './question13a/question13a.module#Question13aPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
