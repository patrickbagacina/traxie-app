import { Model } from './model';

export class Manager extends Model {
  
}

export interface ManagerModel {
  // login response fields
  user_id: string;
  email: string;
  access_token: string;
}