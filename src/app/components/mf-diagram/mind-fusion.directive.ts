import {Directive, ViewContainerRef} from '@angular/core';
@Directive({selector: '[mind-fusion-diagram]'})
export class MindFusionDirective {
    constructor(public viewContainerRef : ViewContainerRef) {}
}