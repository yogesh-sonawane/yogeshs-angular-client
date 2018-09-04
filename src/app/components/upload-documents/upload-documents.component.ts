import {
    Component,
    NgModule,
    OnInit,
    OnChanges,
    Input,
    ViewChild,
    ComponentFactoryResolver,
    OnDestroy
} from '@angular/core';
import {UploadDocumentsDirective} from './upload-documents.directive';
import {MessageService} from '../../app-services/log-message/message.service';
import {HttpClient} from '@angular/common/http';

@Component({selector: 'upload-documents', templateUrl: './upload-documents.html', styleUrls: ['./upload-documents.css']})
export class UploadDocumentsComponent implements OnInit {
    constructor(private httpClient : HttpClient, private componentFactoryResolver : ComponentFactoryResolver, private msgObj : MessageService) {};
    @Input()uploadConfig : {
        id: string;
        placeHolder: string;
        allowExtensions: string;
        multiple: boolean;
        maxSize: number;
        uploadDirName: string;
        uploadApi: {
            url: string,
            successCallback: ({}) => {},
            errorCallback: any
        }
    };
    get fileCtrl() : string {
        return this.uploadConfig.id + '-fileUpload';
    };
    get selectedFiles() : string {
        return this.uploadConfig.id + "-selected-files";
    }
    get uploadBtn() : string {
        return this.uploadConfig.id + "-btnUpload";
    }
    get msgTd() : string {
        return this.uploadConfig.id + '-tdMsg';
    }
    ngOnInit() : void {};
    triggerClick(args) {
        const fileCtrl = this.fileCtrl;
        let file = document.getElementById(fileCtrl);
        this
            .msgObj
            .clear(this.msgTd);
        file.click();
    };
    showSelected() {
        let file : any = document.getElementById(this.fileCtrl);
        var files = file.files;
        var selectedFiles : any = document.getElementById(this.selectedFiles);
        selectedFiles.value = files.length + " file(s) selected";
        this
            .msgObj
            .clear(this.msgTd);
    }

    uploadDocuments() {
        let uploadUrl = this.uploadConfig.uploadApi.url + "?uploadDirName=" + this.uploadConfig.uploadDirName;
        let file : any = document.getElementById(this.fileCtrl);
        var files = file.files;
        if (files.length <= 0) {
            this
                .msgObj
                .showMessage(this.msgTd, "No file(s) selected!", "info");
            return false;
        }
        const formData = new FormData();
        for (let index = 0; index < files.length; index++) {
            formData.append("uploads", files[index]);
        }
        this
            .httpClient
            .post(uploadUrl, formData)
            .pipe(files => files)
            .subscribe(d => {
                if (this.uploadConfig.uploadApi.successCallback) 
                    this.uploadConfig.uploadApi.successCallback(d);
                this
                    .msgObj
                    .showMessage(this.msgTd, JSON.stringify(d, undefined, 4), "success");
            }, e => {
                // if (this.uploadConfig.uploadApi.errorCallback)
                // this.uploadConfig.uploadApi.errorCallback(e); else
                this
                    .msgObj
                    .showMessage(this.msgTd, JSON.stringify(e, undefined, 4), "success");
            });
    };
}

/*
export interface UploadDocs {
    createInstance(id : string, multiple : string, placeHolder : string, accept : string) : ThisType < this >;
    initialize(id : string, multiple : string, placeHolder : string, accept : string) : ThisType < this >;
    progressHandling(event : Event);
    uploadDocuments();
}
*/