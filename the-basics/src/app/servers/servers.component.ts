import { Component } from '@angular/core';

// NOTE: We changed 'templateUrl' to 'template' and defined our own in-line HTML file within the new 'template' key value:
@Component({
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
