import { Injectable,Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LoginService {

  constructor(@Inject('Config')public Config,
  @Inject('HttpResponseHandlerService')public HttpResponseHandlerService,
  private http:Http) { 
    // const _this = this

  }
  getRegister(request,callback){
    this.http.post(this.Config.baseUrl + 'api/user', request).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
    }).subscribe(res => {
      if(res.data){
        callback(res);
        return res.data;
      } 
    })
  }
  getUser(request,callback){
    console.log(1111,request)
    this.http.get(this.Config.baseUrl + 'api/user/new?userName='+request.userName).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    ).subscribe(res => {
      if(res.data){
        console.log(res.data);
        callback(res);
        return res.data;
      }
    })
  }
  getUserById(request,callback){
    console.log(1111,request)
    return this.http.get(this.Config.baseUrl + 'api/user/new', { params: request}).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    )
  }
  postToken(request, callback) {
    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    header.append('Authorization', 'Basic bXlfYXBwOm15X3NlY3JldA==');
    this.http.get(this.Config.baseUrl + 'user/authenticate', {headers: header}).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    ).subscribe(res => {
      if(res.data){
        callback(res);
        return res.data;
      } 
    })
  }
}
