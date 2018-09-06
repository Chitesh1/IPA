import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdds]'
})
export class AddsDirective {

  constructor( private viewcontaierRef:ViewContainerRef) { }

}
