import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseAddress, CommonUtils} from '../../app-modules/index';
import {Observable} from 'rxjs';
import {HttpParamsOptions} from '@angular/common/http/src/params';
import {FileMaster} from '../../models/file-master';
var baseAddress = new BaseAddress().baseAddress();

@Injectable()
export class KeywordSearchService {
    constructor(private httpClient : HttpClient) {};
    performSearch(options : {}) : Observable < FileMaster[] > {
        return this.httpClient.post < FileMaster[] > (baseAddress + 'object-explorer/get-all-objects', options);
    }
}