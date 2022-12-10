import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServerModel } from '../Model/server.model';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
 })
export class ServerComponent implements OnInit{

  serverlist : ServerModel[]
  constructor(private ServerService : ServerService){

  }

  ngOnInit(): void {
    this.serverlist = this.ServerService.getservers()
    this.ServerService.serverAdded.subscribe(
      () => {
        this.serverlist = this.ServerService.getservers()
      }
    )
  }


}
