import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserMaster} from '../../models/index';
import {BaseAddress, CommonUtils} from '../../app-modules/index';
import {Observable, of} from 'rxjs';

var baseAddress = BaseAddress.baseAddress();

@Injectable()
export class UserMasterService {
  constructor(private httpClient : HttpClient) {};

  userLogin(data) : Observable < UserMaster > {
    return this.httpClient.post < UserMaster > (baseAddress + 'users/userLogin', data);
  }

  getAll() : Observable < UserMaster[] > {
    return this.httpClient.get < UserMaster[] > (baseAddress + 'projects/getAll');
  }

  getById(id : number) {
    return this
      .httpClient
      .get('/api/users/' + id);
  }

  create(user : UserMaster) {
    return this
      .httpClient
      .post(baseAddress + 'users/addUser', user);
  }

  update(user : UserMaster) {
    return this
      .httpClient
      .put('/api/users/' + user.userId, user);
  }

  delete(id : number) {
    return this
      .httpClient
      .delete('/api/users/' + id);
  }
}
