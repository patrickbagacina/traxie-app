import { Injectable } from '@angular/core';
import { ManagersApi } from '../apis/managers-api';
import { ManagerModel } from '../models/manager';
import { Storage, StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  constructor(private api: ManagersApi, private storage: StorageService) {

  }
  
  async login(email: string, password: string): Promise<ManagerModel> {
    const res = await this.api.login(email, password);

    // save access_token to storage
    this.storage.setItem(Storage.ACCESS_TOKEN, res.access_token);

    return res;
  }
}
