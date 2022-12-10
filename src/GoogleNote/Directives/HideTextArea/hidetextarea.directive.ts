import { Directive, ElementRef, Renderer2, TemplateRef, ViewRef } from "@angular/core";

@Directive({
    selector:"[hidetext]"
})
export class HideArea{

    
    constructor(private elementref:ElementRef,private randerer:Renderer2,private viewref:ViewRef,private templateref:TemplateRef<void>){
        
    }


}