import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:"[ChangeColorRed]"
})

export class AppBasicDirective implements OnInit{

    @Input() set unless(condition:boolean){
        if(!condition){
            this.viewref.createEmbeddedView(this.templateref)
        }else{
            this.viewref.clear()
        }
    }

    @Input() defaultcolor:string = "red";

    @HostBinding("style.backgroundColor") backgroundcolor : string

    constructor(private elemref:ElementRef,private renderer:Renderer2,private templateref:TemplateRef<any>,private viewref:ViewContainerRef){}

    ngOnInit(): void {
        this.backgroundcolor = this.defaultcolor
        // this.elemref.nativeElement.style.color = "red"
        // this.renderer.setStyle(this.elemref.nativeElement,"color","blue")
    }

    @HostListener("mouseenter") mousehover(event:Event){
        // this.renderer.setStyle(this.elemref.nativeElement,"color","white")
        this.backgroundcolor = this.defaultcolor
    }

    @HostListener("mouseleave") mouseleave(event:Event){
        // this.renderer.setStyle(this.elemref.nativeElement,"color","white")
        this.backgroundcolor = "green"
    }
    
}