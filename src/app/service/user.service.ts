import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  getUser(){
    return JSON.parse(atob(localStorage.getItem('user')));
  }

  setUser(user){
    localStorage.setItem('user', btoa(JSON.stringify(user)));
  }
}
