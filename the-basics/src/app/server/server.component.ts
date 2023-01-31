import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    // NOTE:
    // The inclusion of ': number' and ': string' is actually inferred automatically in Typescript:
    serverId: number = 10;
    serverStatus: string = 'Offline';

    getServerStatus() {
        return this.serverStatus;
    }

}