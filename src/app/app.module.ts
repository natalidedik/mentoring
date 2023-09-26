import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './pages/user/user.component';
import {FooterComponent} from './components/footer/footer.component';
import {DatePipe} from '@angular/common';
import {RecursivePipe} from './pipes/recursive.pipe';
import {TimeComponent} from './components/timer/time.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    FooterComponent,
    TimeComponent,
    RecursivePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe, RecursivePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
