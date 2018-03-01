import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
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
    this.http.get(this.Config.baseUrl + 'api/user?userName='+request.userName).map( res => {
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
}
