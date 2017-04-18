import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChooseHowToContribute } from './choose-how-to-contribute/choose-how-to-contribute.component';
import { SubmitASong } from './submit-a-song/submit-a-song.component';

import { AppComponent }  from './main-container/app.component';

@NgModule({
  imports: [ 
    BrowserModule
    ],
  declarations: [ 
    AppComponent,
    ChooseHowToContribute,
    SubmitASong
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
