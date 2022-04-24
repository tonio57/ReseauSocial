import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {userInterface} from "./Interface/userInterface";
import { InscriptionService } from "./inscription.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase = "https://reseau.jdedev.fr/api/user"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  
};
userList?:Array<userInterface>;
user: { id:number, token: string } |null =JSON.parse(localStorage.getItem("user")!);
constructor(private http: HttpClient, private userConnected:InscriptionService, private router:Router) { }


  getUser(){
    this.user = JSON.parse(localStorage.getItem("user")!);
    if(this.user) {
      const headers = {
        headers: new HttpHeaders({
          'Authorisation': '  ' + this.user.token,
        })
      }
      return this.http.get<userInterface>(this.urlBase + `/${this.user.id}`, headers)
        .subscribe(user => {
          this.userConnected.user= user;
        });
    }else{
      this.router.navigate(["/login"]);
      return 0;
    }
  }

  disconnect(){
    localStorage.clear();
    this.user = null;
  }
}
