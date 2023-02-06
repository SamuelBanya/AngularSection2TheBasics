import { Component } from '@angular/core';

@Component({
  // PREVIOUS VERSION (using attribute syntax):
  // selector: '[app-servers]',
  // PREVIOUS VERSION (using class syntax): 
  // selector: '.app-servers',
  // NOTE: The 'selector' tag works like an CSS selector where you can just add the '<app-servers>' tag throughout the application:
  // PREVIOUS VERSION: (using normal tag syntax):
  selector: 'app-servers',
  // NOTE: 
  // This version uses an in-line template:
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  // NOTE: This was for the previous one-way databinding example:
  // serverName = '';
  serverName = "TestServer";
  serverCreated = false;

  // NOTE:
  // The 'constructor' is the function that is executed when the component is created in Angular:
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {

  }

  onCreateServer() {
    // NOTE: We are setting 'serverCreated' to true for later use with the '*ngIf' directive:
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;

  }

  onUpdateServerName(event: Event) {
    // NOTE:
    // We need '<HTMLInputElement>' since this is a Typescript specific requirement via 'casting':
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log("event: ", event);
  }

}
