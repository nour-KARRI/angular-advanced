import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit{

    @Input() color = 'yellow';

    constructor(private el: ElementRef,
        private rendered: Renderer2){ }
    ngAfterViewInit(): void {
        this.setBackgroundColor(this.color)
    }
    
    setBackgroundColor(color: string){
        this.rendered.setStyle(this.el.nativeElement, 'background-color', color)
    }


    @HostListener('mouseenter') onMouseEnter() {
        this.setBackgroundColor('lightgreen');
      }
    
      @HostListener('mouseleave') onMouseLeave() {
        this.setBackgroundColor(this.color);
      }
    
      @HostListener('click') onClick() {
        this.color = 'lightgreen';
      }
}