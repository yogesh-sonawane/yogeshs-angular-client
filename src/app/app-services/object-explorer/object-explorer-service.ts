import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FileTypeExtensionMaster} from '../../models/index';
import {BaseAddress, CommonUtils} from '../../app-modules/index';
import {Observable, of} from 'rxjs';
import {HttpParamsOptions} from '@angular/common/http/src/params';
var baseAddress =  BaseAddress.baseAddress();

@Injectable()
export class ObjectExplorerService {
    constructor(private httpClient : HttpClient) {};
    getObjectTypes(searchCriteria : {}) : Observable < FileTypeExtensionMaster[] > {
        return this.httpClient.post < FileTypeExtensionMaster[] > (baseAddress + 'object-explorer/get-object-types', searchCriteria)
    };
    getAllObjects(fileTypeExtensionId : string, searchKeyword : string) : Observable < any[] > {
        searchKeyword = searchKeyword || '';
        const paramObj: any = {
            FileTypeExtensionId: parseInt(fileTypeExtensionId),
            FileName: searchKeyword
        };
        const httpParams: HttpParamsOptions = {
            fromObject: paramObj
        };
        const options = {
            params: new HttpParams(httpParams)
        };
        return this.httpClient.get < any[] > (baseAddress + 'object-explorer/get-all-objects', options)
    };
    getObjectSource(objectId : number) : Observable < any > {
        var url = baseAddress + 'object-explorer/get-object-source?objectId=' + objectId;
        return this.httpClient.get < any > (url);
    };
    getObjectUploads(objectId : string) : Observable < string[] > {
        var url = baseAddress + 'object-explorer/get-object-uploads?objectId=' + objectId;
        return this.httpClient.get < string[] > (url);
    };
    downloadFile(objectId : number, fileName : string) {
        var url = baseAddress + 'object-explorer/download-file?objectId=' + objectId + "&fileName=" + fileName;
        return this
            .httpClient
            .get(url, {responseType: 'blob'});
    };
    deleteFile(objectId : number, fileName : string) {
        var url = baseAddress + 'object-explorer/delete-file?objectId=' + objectId + "&fileName=" + fileName;
        return this
            .httpClient
            .delete(url);
    };
};