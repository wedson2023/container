import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  ApiGet(url){
    return this.http.get(environment.api + url);
  }

  ApiPost(url, data){
    return this.http.post(environment.api + url, data);
  }

  ApiDelete(url){
    return this.http.delete(environment.api + url);
  }

  ApiPut(url, data){
    return this.http.put(environment.api + url, data);
  }
}
