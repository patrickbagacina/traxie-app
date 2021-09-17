import { Injectable } from '@angular/core';
import { ApiException } from '../apis/exceptions';
import { ManagersApi } from '../apis/managers-api';
import { ManagerModel } from '../models/manager';
import { Storage, StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  constructor(private api: ManagersApi, private storage: StorageService) {

  }
  
  async login(email: string, password: string) {
    const res = await this.api.login(email, password);

    // save access_token to storage
    if (!(res instanceof ApiException)) {
      this.storage.setItem(Storage.ACCESS_TOKEN, res.access_token);
    }

    return res;
  }
}
