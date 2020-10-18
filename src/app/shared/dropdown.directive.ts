import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';
@Directive({
    selector:'[appDropdown]'
})
export class DropDownDirective{

    @HostBinding('class.open') isOpen: boolean = false;

    constructor(private elRef: ElementRef) {}
    // @HostListener('click') toggle(){
    //    this.isOpen = !this.isOpen;
    // }
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
}