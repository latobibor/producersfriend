import { Inject, Component } from '@angular/core';
import { Song, SubmittedSongsService } from '../services/submitted-songs.service';

@Component({
  selector: 'give-feedback',
  templateUrl: './give-feedback.html',
})
export class GiveFeedback {
  public availableSongs: Song[];

  constructor(@Inject(SubmittedSongsService) private submittedSongsService: SubmittedSongsService ) {
    this.availableSongs = this.submittedSongsService.songs;
  }

  public addMixingComment(songId: number, comment: string) {
    this.submittedSongsService.addMixingComment(songId, { 
      userId: 1,
      comment
    });
  }
}