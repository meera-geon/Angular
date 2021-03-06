import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
 // template: `
 // <app-server></app-server>
 // <app-server></app-server>
 // `,
 templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ="No server was created";
  serverName='';
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }
onCreateServer()
{
  this.serverCreationStatus="server was created";
}
onUpdateServerName(event: any)
{
this.serverName=(<HTMLInputElement>event.target).value;
}
}
