import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    
  }

}
