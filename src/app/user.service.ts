import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  storeData(name, email, number, subject, message) {
    return this.http.post('FIREBASE_DB_LINK/dbName.json',
    { name: name, email: email, number: number, subject: subject, message: message});
  }

  getData() {
    return this.http.get('FIREBASE_DB_LINK/dbName.json');
  }
}
