import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getItem(key: string) {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }
}

export class Storage {
  static ACCESS_TOKEN = 'access_token';
}