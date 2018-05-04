import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from "rxjs/Observable";
import { HttpParams } from "@angular/common/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TaskService {

  constructor(@Inject('Config')public Config,
  @Inject('HttpResponseHandlerService')public HttpResponseHandlerService,
  private http:Http) { 
    // const _this = this

  }
  getTaskList(request,callback){
    console.log(1111,request)
    return this.http.get(this.Config.baseUrl + 'api/task',{ params: request }).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    )
  }
  
  createTask(request, callback) {
    return this.http.post(this.Config.baseUrl + 'api/task', request).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }  
    )
  }

  editTask(request) {
    return this.http.put(this.Config.baseUrl + 'api/task/'+ request.id , request).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }  
    )
  }

  deleteTask(request, callback) {
    console.log(request)
    return this.http.delete(this.Config.baseUrl + 'api/task/'+request.id).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }  
    )
  }
}
