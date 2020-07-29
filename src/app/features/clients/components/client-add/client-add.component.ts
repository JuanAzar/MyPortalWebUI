import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from '../../shared/client';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {
  alertMessage = "";
  alertType = "alert-success";

  newClientForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    company: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', Validators.maxLength(10)),
    primaryPhoneNumber: new FormControl('', [Validators.required]),
    secondaryPhoneNumber: new FormControl('')
  });

  get firstName(){
    return this.newClientForm.get('firstName');
  }

  get lastName(){
    return this.newClientForm.get('lastName');
  }

  get company(){
    return this.newClientForm.get('company');
  }

  get birthDate(){
    return this.newClientForm.get('birthDate');
  }

  get email(){
    return this.newClientForm.get('email');
  }

  get primaryPhoneNumber(){
    return this.newClientForm.get('primaryPhoneNumber');
  }

  get secondaryPhoneNumber(){
    return this.newClientForm.get('secondaryPhoneNumber');
  }

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    let client = new Client();
    client.firstName = this.firstName.value;
    client.lastName = this.lastName.value;
    client.company = this.company.value;
    client.email = this.email.value;    
    client.birthDate = new Date(this.birthDate.value);
    client.primaryPhoneNumber = this.primaryPhoneNumber.value;
    client.secondaryPhoneNumber = this.secondaryPhoneNumber.value;

    this.clientService.add(client)
      .subscribe(response => {        
        this.alertMessage = "Client successfully added!";
        this.alertType = "alert-success";
      },
      error => {
        this.alertMessage = "Oops! An error has ocurred.";
        this.alertType = "alert-danger";
      });
  }
}