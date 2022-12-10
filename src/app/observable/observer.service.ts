import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class observerService{
    // activated = new EventEmitter<boolean>
    activated = new Subject<boolean>()
}