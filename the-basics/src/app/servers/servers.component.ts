import { Component } from '@angular/core';

@Component({
  // NOTE: The 'selector' tag works like an CSS selector where you can just add the '<app-servers>' tag throughout the application:
  // PREVIOUS VERSION: (using normal tag syntax):
  selector: 'app-servers',
  // PREVIOUS VERSION (using attribute syntax):
  // selector: '[app-servers]',
  // PREVIOUS VERSION (using class syntax): 
  // selector: '.app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
