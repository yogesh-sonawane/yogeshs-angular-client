import {Directive, ViewContainerRef} from '@angular/core';

@Directive({selector: '[upload-documents]'})
export class UploadDocumentsDirective {
    constructor(public viewContainerRef : ViewContainerRef) {}
}