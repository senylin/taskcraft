import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from "rxjs/Observable";
import { HttpParams } from "@angular/common/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PlatformService {

  constructor(@Inject('Config')public Config, @Inject('Store')public Store,
  @Inject('HttpResponseHandlerService')public HttpResponseHandlerService,
  private http:Http) { 
    // const _this = this

  }
  getLogList(request,callback){
    console.log(1111,request)
    return this.http.get(this.Config.baseUrl + 'api/log',{ params: { ...request, userId: this.Store.user._id } }).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    )
  }
  getContactList(request,callback){
    console.log(1111,request)
    return this.http.get(this.Config.baseUrl + 'api/contact',{ params: { ...request } }).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    )
  }
  getContactOne(request,callback){
    console.log(1111,request)
    return this.http.get(this.Config.baseUrl + 'api/contact/' + request.id,{ params: { ...request }}).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    )
  }
  createContact(request, callback) {
    return this.http.post(this.Config.baseUrl + 'api/contact', { ...request, contactId: this.Store.person._id }).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }  
    )
  }

  editContact(request) {
    return this.http.put(this.Config.baseUrl + 'api/contact/'+ request.id , { ...request, contactId: this.Store.person._id }).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }  
    )
  }

  deleteContact(request, callback) {
    console.log(request)
    return this.http.delete(this.Config.baseUrl + 'api/contact/'+request.id).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }  
    )
  }
  getUsers(request){
    return this.http.get(this.Config.baseUrl + 'api/user?userName='+request.userName).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    )
  }
  getUser(request){
    return this.http.get(this.Config.baseUrl + 'api/user/new?_id='+request._id).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    )
  }
}
