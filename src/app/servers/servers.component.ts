import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server is created';
  serverName = 'testing';
  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },  2000);
  }

  ngOnInit() {
  }

  onCreateServer () {
    this.serverCreationStatus = 'Server is created';
  }

  onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
