import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],

})
export class InscriptionComponent implements OnInit {
Mail: string=""
Pseudo: string=""
Password: string=""
ConfirmPassword: string=""
Avatar: string=""

  constructor() { }

  ngOnInit(): void {
  }

}
