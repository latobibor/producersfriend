import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ChooseHowToContribute } from './choose-how-to-contribute/choose-how-to-contribute.component';
import { SubmitASong } from './submit-a-song/submit-a-song.component';
import { GiveFeedback } from './give-feedback/give-feedback.component';
import { SongComponent } from './give-feedback/song/song.component';

import { AppComponent }  from './main-container/app.component';
import { SubmittedSongsService } from './services/submitted-songs.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
    ],
  declarations: [ 
    AppComponent,
    ChooseHowToContribute,
    GiveFeedback,
    SubmitASong,
    SongComponent
  ],
  providers: [ SubmittedSongsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
