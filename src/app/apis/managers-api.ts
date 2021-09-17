import { HttpClient } from '@angular/common/http';
import { Api } from './api';
import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { environment } from '../../environments/environment';
import { ManagerModel } from '../models/manager';
import { ApiException } from './exceptions';

@Injectable({
  providedIn: 'root'
})
export class ManagersApi extends Api {
  constructor(private http: HttpClient, private storage: StorageService) {
    super(http, storage);
  }

  async login(email, password): Promise<ManagerModel | ApiException> {
    const res = await this.post<ManagerModel>(
      `${environment.baseUrl}/users/login`,
      {
        email: email,
        password: password,
      }
    );

    return res;
  }

}