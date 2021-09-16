import { HttpClient } from '@angular/common/http';
import { Api } from './api';
import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { environment } from '../../environments/environment';
import { ManagerModel } from '../models/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagersApi extends Api {
  constructor(private http: HttpClient, private storage: StorageService) {
    super(storage);
  }

  async login(email, password): Promise<ManagerModel> {
    const res = await this.http.post<any>(
      `${environment.baseUrl}/users/login`, 
      { 
        email: email,
        password: password
      },
    ).toPromise();

    console.log(res);

    return this.data(res) as ManagerModel;
  }

}