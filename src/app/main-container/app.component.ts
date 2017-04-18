import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><choose-how-to-contribute></choose-how-to-contribute>`,
})
export class AppComponent  { name = 'kis szarom'; }
