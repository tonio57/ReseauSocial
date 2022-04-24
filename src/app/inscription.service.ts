import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import{ userInterface } from './Interface/userInterface'
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class InscriptionService {
  urlBase = "https://reseau.jdedev.fr/api/user"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};
userList?:Array<userInterface>;
user: { id:number, token: string } |null =JSON.parse(localStorage.getItem("user")!);
constructor(private http: HttpClient, private userConnected:InscriptionService, private router:Router) { }

addUser(user:object){
  const body = JSON.stringify(user);
  console.log(body);
  return this.http.post(this.urlBase, body, this.httpOptions);
}
  login(user:object){
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.urlBase + "/connect", body, this.httpOptions);
  }

  getUser(id:number){
    const headers = {
      headers: new HttpHeaders({
        'Authorisation': 'Bearer '+ this.userConnected.user?.token,
      })
    }
    return this.http.get<userInterface>(this.urlBase + `/${id}`, headers)
  }


}

