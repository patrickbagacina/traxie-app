import { HttpHeaders } from '@angular/common/http';
import { Storage, StorageService } from '../services/storage.service';

export abstract class Api {
  constructor(private storageSvc: StorageService) {
    
  }

  data(res: any) {
    if (res.data) return res.data;

    throw new Error('API data error');
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