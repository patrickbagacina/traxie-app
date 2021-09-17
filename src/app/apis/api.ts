import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Storage, StorageService } from '../services/storage.service';
import * as ex from './exceptions';

export abstract class Api {
  constructor(private client: HttpClient, private storageSvc: StorageService) {
    
  }

  async post<T>(url, params): Promise<T | ex.ApiException> {
    return new Promise<any>(async (resolve, reject) => {
      this.client.post<any>(url, params).subscribe(
        res => {
          resolve(res.data);
        },
        error => {
          resolve(this.handleError(error));
        }
      );
    });
  }

  handleError(error) {
    switch (error.status) {
      case 400:
        return new ex.BadRequestException(error.error);
      case 401:
        return new ex.UnauthorizedException();
      case 403:
        return new ex.ForbiddenException();
      case 500:
        return new ex.ServerException();
      default:
        return new Error('Unknown error');
    }
  }

  headers() {
    if (this.storageSvc.getItem(Storage.ACCESS_TOKEN)) {
      const header = new HttpHeaders();
      header.set('Authorization', `Bearer ${this.storageSvc.getItem(Storage.ACCESS_TOKEN)}`);

      return header;
    }

    return null;
  }
}