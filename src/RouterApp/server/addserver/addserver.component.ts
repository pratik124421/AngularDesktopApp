import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ServerService } from 'src/RouterApp/services/server.service';

@Component({
  selector: 'app-addserver',
  templateUrl: './addserver.component.html',
  styleUrls: ['./addserver.component.css'],
 })
export class AddServerComponent {

    @ViewChild("name") servername : ElementRef
    @ViewChild("ip") ipaddress : ElementRef 
    @ViewChild("location") location : ElementRef 

    constructor(private ServerService : ServerService){

    }

    addserver(){
        this.ServerService.AddServer(
            this.servername.nativeElement.value,
            this.ipaddress.nativeElement.value,
            this.location.nativeElement.value)
    }


}
