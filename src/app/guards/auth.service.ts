import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpService } from '../service/http.service';

declare var swal;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  canActivate():Promise<any> {
    return this.http.ApiPost('validar-sessao', {}).toPromise().then((response:any) => {
      return true;
    }).catch((err:any) => {
      this.router.navigate(['']);
      return false;
    });
  }
}
