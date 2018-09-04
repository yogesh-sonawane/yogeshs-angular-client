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
            url: "https://pure-journey-27231.herokuapp.com:27533/api/UploadDocs/upload",
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