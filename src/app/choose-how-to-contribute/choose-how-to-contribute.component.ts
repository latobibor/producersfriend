import { Component } from '@angular/core';

@Component({
  selector: 'choose-how-to-contribute',
  templateUrl: './choose-how-to-contribute.template.html',
})
export class ChooseHowToContribute {  
    public canSubmitSong: boolean = true;

    public submitMode: boolean = false;
    public feedbackMode: boolean = false;

    public submitASong() {
        console.log('lalala');
        this.submitMode = true;
        this.feedbackMode = false;
    }

    public giveFeedback() {
        console.log('give feedback');
        this.submitMode = false;
        this.feedbackMode = true;
    }
}