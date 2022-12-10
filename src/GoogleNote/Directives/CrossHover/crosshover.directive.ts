import { Directive, ElementRef, HostBinding, HostListener, Renderer2, TemplateRef, ViewRef } from "@angular/core";

@Directive({
    selector:"[crosshover]"
})
export class CrossHover{

    @HostBinding("style") style:any

    @HostListener("mouseenter") mouseover(event:Event){
        // method 1
        // this.elem.nativeElement.style.cursor="pointer"
        
        // method 2
        // this.renderer.setStyle(this.elem.nativeElement,"cursor","pointer")
        // this.renderer.setStyle(this.elem.nativeElement,"color","red")
    
        // method 3
        this.style = {
            cursor:"pointer",
            color:"red"
        }
    } 

    constructor(private elem:ElementRef,private renderer : Renderer2){

    }
}