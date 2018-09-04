import {Component, OnInit} from '@angular/core';
import {UploadDocumentsComponent} from '../../components/upload-documents/upload-documents.component';

@Component({templateUrl: './upload-project.html', selector: 'upload-project'})
export class UploadProjectComponent implements OnInit {
    uploadConfig = {
        maxSize: 50,
        allowExtensions: ".zip",
        id: "documentUploader",
        placeHolder: "Please select .zip directory to upload",
        multiple: true,
        uploadDirName: "UploadedProjects",
        uploadApi: {
            url: "http://localhost:3000/api/UploadDocs/upload",
            headers: {},
            successCallback: function (d) {
                console.log(d);
            },
            errorCallback: function (e) {
                console.log(e);
            }
        }
    };
    constructor() {
        document.title = "floKapture | Upload Project";
    }
    ngOnInit() {};
}