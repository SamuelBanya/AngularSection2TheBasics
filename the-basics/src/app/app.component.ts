import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // NOTE: We are adding an in-line CSS stylesheet just as an example here via the 'styles' property:
  styles: [`
    h3 {
      color: dodgerblue;  
    }
  `]
})
export class AppComponent {
  title = 'the-basics';
}
