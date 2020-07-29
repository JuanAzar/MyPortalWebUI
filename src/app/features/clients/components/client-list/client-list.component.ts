import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/features/clients/shared/client';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: Array<Client> = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAll()
      .subscribe(response => {
        this.clients = response;
      },
      error => {

      });
  }
}
