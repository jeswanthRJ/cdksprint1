import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddataComponent } from './pages/adddata/adddata/adddata.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';

const routes: Routes = [
  { path: '',component: LoginComponent},
  { path: 'home',component: HomeComponent},
  { path: 'adddata',component: AdddataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
