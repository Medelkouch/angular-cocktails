import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnChanges {
	@HostBinding('style.backgroundColor') backroundColor: string;
	@HostBinding('style.Color') Color: string;
	@Input('appActive') isActive: boolean;

	ngOnChanges(){
		if (this.isActive) {
			this.backroundColor = '#3498db';
			this.Color = 'white';
		} else {
			this.backroundColor = 'transparent';
			this.Color = 'black';
		}
	}
  constructor() { }

}
