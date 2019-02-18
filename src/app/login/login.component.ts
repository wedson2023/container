import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';
import { HttpService } from '../service/http.service';
import { UserService } from '../service/user.service';

declare var swal;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  usuario:any = {
    login : null,
    password : null
  }

  progresso = this.ngProgress.ref();
  static ContainerComponent: any;
  constructor(
    private router: Router,
    private http: HttpService,
    private ngProgress: NgProgress,
    private user: UserService
  ) {}


  login(usuario){
    // this.progresso.start();
    // this.http.ApiPost('login', usuario).subscribe((response:any) => {
    //   this.progresso.complete();
    //   this.user.setUser(response.user);
    //   localStorage.setItem('token', response.token);
       this.router.navigate(['dashboard']);
    // }, (err:any) => {
    //   swal('Erro', ( err.error.message || err.error.error ), 'error')
    //   this.progresso.complete();
    // })
  }

  ngOnInit() {
  }

}
