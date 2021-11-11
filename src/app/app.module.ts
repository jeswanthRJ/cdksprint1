import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input/input.component';
import { HeaderComponent } from './components/header/header/header.component';
import { IdComponent } from './components/id/id/id.component';
import { AddComponent } from './components/add/add/add.component';
import { DatalistComponent } from './components/datalist/datalist/datalist.component';
import { FormComponent } from './components/form/form/form.component';
import { SearchComponent } from './components/search/search/search.component';
import { AdddataComponent } from './pages/adddata/adddata/adddata.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InitialsPipe } from './service/initials.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TimerComponent } from './components/timer/timer.component';
import { FormatTimePipe } from './service/formatTime.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HeaderComponent,
    IdComponent,
    AddComponent,
    DatalistComponent,
    FormComponent,
    SearchComponent,
    AdddataComponent,
    HomeComponent,
    LoginComponent,
    InitialsPipe,
    FormatTimePipe,
    PopUpComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
