import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientList = [];

  constructor(){
    let client1 = new Client();
    client1.firstName = "Juan";
    
    let client2 = new Client();
    client2.firstName = "Leandro";

    let client3 = new Client();
    client3.firstName = "Julian";

    this.add(client1);
    this.add(client2);
    this.add(client3);
  }

  add(client: Client){
    this.clientList.push(client);
  }

  getAll(){
    return this.clientList;
  }
}
