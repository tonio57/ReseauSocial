import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";  
import {NgForm} from '@angular/forms';
import { InscriptionService } from '../inscription.service';

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

  constructor(private inscriptionService:InscriptionService, private router:Router) {
  }
 
  ngOnInit(): void {
  }
}
