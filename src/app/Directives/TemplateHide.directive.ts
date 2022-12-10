import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef } from "@angular/core";

@Directive({
    selector:"[hidecontent]"
})
export class TemplateHide{
    
    @Input() set hidecontent(condition:boolean){
        console.log(condition)
        if(condition){
            this.viewref.clear()
        }else{
            this.viewref.createEmbeddedView(this.tempref)
        }
    }

    constructor(private tempref:TemplateRef<any>,private viewref:ViewContainerRef){

    }


    

}