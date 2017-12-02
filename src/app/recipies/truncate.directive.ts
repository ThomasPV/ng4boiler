import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appTruncate]'
})
export class TruncateDirective {
    text:string;
  constructor(private elRef:ElementRef) {}

   ngAfterViewInit() {
    this.elRef.nativeElement.innerHTML = this.elRef.nativeElement.innerHTML.substring(0 , 25) + '.... <span>read more</span>';
   }

}
