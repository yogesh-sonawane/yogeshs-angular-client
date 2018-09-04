import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ObjectExplorerService} from '../../app-services/object-explorer/object-explorer-service';
import {FileTypeExtensionMaster, FileMaster} from '../../models/index';
import {SearchTextComponent} from '../../components/search-text/search-text.component';
import {MindFusionDiagramComponent} from '../../components/mf-diagram/mind-fusion-diagram.component';
import {NavbarHeaderTemplateComponent} from '../../components/header/navbar-header-template.component';
import {UploadDocumentsComponent} from '../../components/upload-documents/upload-documents.component';

@Component({selector: 'app-object-explorer', templateUrl: './object-explorer.html'})
export class ObjectExplorerComponent implements OnInit,
AfterViewInit {
    constructor(private objExplorerService : ObjectExplorerService, private searchTextComponent : SearchTextComponent) {};
    public objectTypes : FileTypeExtensionMaster[]; // = [1, 2, 3, 4, 5];
    public fileMasters : FileMaster[];
    public selectedType : any;
    public uploadedFiles : string[];
    public objectSelected : number;
    public searchTextConfig = {
        id: "sourceTextSearch"
    };
    public mindFusionConfig = {
        id: "canvas-diagram"
    }
    public docUploadConfig = {
        maxSize: 100,
        allowExtensions: ".jpeg,.jpg",
        id: "docUploader",
        placeHolder: "Please select .jpeg,.jpg file(s) to upload",
        multiple: true,
        uploadDirName: "BP1400",
        uploadApi: {
            url: "http://localhost:3000/api/UploadDocs/upload",
            headers: {},
            successCallback: (d) => {
                console.log(d);
                this
                    .objExplorerService
                    .getObjectUploads(`${this.selectedObject}`)
                    .subscribe(f => {
                        this.uploadedFiles = f;
                    });
            },
            errorCallback: function (e) {
                console.log(e);
            }
        }
    };
    public selectedObject : number;
    public optionSelected : any;
    searchKeyword : string;
    ngAfterViewInit() : void {
        this
            .objExplorerService
            .getObjectTypes({LanguageId: 5})
            .subscribe(d => {
                this.objectTypes = d;
                this.optionSelected = d[0].FileTypeExtensionId;
                this.selectedType = d[0].FileTypeExtensionId;
            });
    };
    getAllObjects() {
        this
            .objExplorerService
            .getAllObjects(this.selectedType, this.searchKeyword)
            .subscribe(d => {
                this.fileMasters = d;
                this.objectSelected = d[0].FileId;
                this.selectedObject = d[0].FileId;
            });
    }
    ngOnInit() {};
    onOptionsSelected($event) {
        this.selectedType = $event;
        this.searchKeyword = "";
    };
    onObjectSelected($event) {
        this.selectedObject = $event;
        this.uploadedFiles = [];
        this.docUploadConfig.uploadDirName = $event;
    };
    showObjectDetails() : void {
        this.searchTextComponent.searchTextConfig = this.searchTextConfig;
        this
            .objExplorerService
            .getObjectSource(this.selectedObject)
            .subscribe(s => {
                var text = s.SourceData;
                this
                    .searchTextComponent
                    .setText
                    .call(this.searchTextComponent, text);
            });
        this
            .objExplorerService
            .getObjectUploads(`${this.selectedObject}`)
            .subscribe(f => {
                this.uploadedFiles = f;
            });
    };
    deleteFile(file : string) {
        this
            .objExplorerService
            .deleteFile(this.selectedObject, file)
            .subscribe(f => {
                console.log(`Deleted file: ${file}`);
            }, error => {
                console.log("Error deleting the file.");
            }, () => {
                console.info("OK");
                this
                    .objExplorerService
                    .getObjectUploads(`${this.selectedObject}`)
                    .subscribe(f => {
                        this.uploadedFiles = f;
                    });
            });
    };
    downloadFile(file : string) {
        this
            .objExplorerService
            .downloadFile(this.selectedObject, file)
            .subscribe(data => {
                this.downloadBlobFile(data, file);
            }, error => {
                console.log("Error downloading the file.");
            }, () => {
                console.info("OK");
            });
    };
    downloadBlobFile(data : any, fileName : string) {
        var blob = new Blob([data]);
        var url = window
            .URL
            .createObjectURL(blob);
        var a = document.createElement('a');
        document
            .body
            .appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = fileName;
        a.click();
        window
            .URL
            .revokeObjectURL(url);
        a.remove();
    };
}