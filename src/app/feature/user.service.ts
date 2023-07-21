import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(userInfo: object){
    this.http.post(`${environment.apiUrl}/login`, JSON.stringify(userInfo), {headers: {'Content-type': 'application/json'}}).subscribe(token=>{
      return token
    })
  }

  register(userInfo: object){
    console.log(userInfo)
    this.http.post(`${environment.apiUrl}/register`, JSON.stringify(userInfo), {headers: {'Content-type': 'application/json'}}).subscribe(user=>{
      return user;
    })
  }

  logout(){

  }
}
