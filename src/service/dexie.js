import Dexie from 'dexie';

export const db = new Dexie('car_auto');
db.version(1).stores({
  car: '++id, name, price, description, company',
});