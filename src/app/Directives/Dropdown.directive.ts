import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:"[dropdown]"
})
export class DropdownDirective{

    constructor(private Elem:ElementRef,private renderer : Renderer2){
    }

    @HostBinding('class.open') isopen: boolean = false

    // @HostListener("click") toggleopen(event:Event){
    //     this.isopen = !this.isopen
    // }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isopen = this.Elem.nativeElement.contains(event.target) ? !this.isopen : false;
      }
    
}