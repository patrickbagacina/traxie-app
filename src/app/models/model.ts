export const dateTimeFormat = 'MMM D, YYYY HH:mm';
export const timeFormat = 'HH:mm';

export abstract class Model {
  id: string;
  created_at: Date;
}