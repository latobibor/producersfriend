import { Component } from '@angular/core';

@Component({
  inputs: [ 'model' ],
  selector: 'song',
  templateUrl: './song.html',
})
export class SongComponent {
  public mixingComment: string;

  public submit() {
    console.log('submit!', this.mixingComment);
  }
}