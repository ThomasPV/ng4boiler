import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {


  constructor() { }


  @HostBinding('class.open') isOpen = false;
  @HostListener('click') openDropdown(){

    this.isOpen = true;

  }
  @HostListener('mouseleave') closeDropdown(){

    this.isOpen = false;

  }


}

