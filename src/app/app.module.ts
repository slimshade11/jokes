import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from '@standalone/components/navbar/navbar.component';
import { ROOT_REDUCERS } from '@store/root-reducer';
import { HttpClientModule } from '@angular/common/http';
import { JokesEffects } from '@store/jokes/jokes.effects';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

const declarations: Array<any> = [AppComponent];
const imports: Array<any> = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
  ButtonModule,
  NavbarComponent,
  ProgressBarModule,
  ToastModule,

  //NgRx
  StoreModule.forRoot(ROOT_REDUCERS),
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  EffectsModule.forRoot([JokesEffects]),
];
const providers: Array<any> = [MessageService];

@NgModule({ declarations, imports, providers, bootstrap: [AppComponent] })
export class AppModule {}
