import { Component, Input, ViewEncapsulation,OnInit } from "@angular/core";

@Component({
    selector:"app-serverlist",
    templateUrl:"./server-list.component.html",
    styles:[`p {color:blue}`],
    // encapsulation:ViewEncapsulation.None
  // used to remove style encapsulation
  // style encaptulation is default behaviour in angular so when we give any style in css file
  // it will apply only that component if you want to remove style encapsulation then use this above option

})
export class ServerListComponent{
    @Input('item') itemname : string

    
}