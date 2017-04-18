import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChooseHowToContribute } from './choose-how-to-contribute/choose-how-to-contribute.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule
    ],
  declarations: [ 
    AppComponent,
    ChooseHowToContribute
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
