import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    { email: 'Lex.Myers@GMAIL.com', important: true, subject: 'Alternative Fax', content: 'Here\'s some content' },
    { email: 'FRED@SLATE.COM', important: false, subject: 'Mr. Slate', content: 'Hello???' },
    { email: 'jarjarj@star.wars', important: true, subject: 'Me is bacca', content: 'See new movie, yassa>?' }
  ];
}
