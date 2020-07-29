import { Injectable } from '@angular/core';
import { Client } from './client';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientList = [];

  constructor(){

  }

  add(client: Client): Observable<any>{
    this.clientList.push(client);

    return of(true);
  }

  getAll(): Observable<any>{
    return of(this.clientList);
  }
}
