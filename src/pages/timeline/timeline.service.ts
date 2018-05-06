import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from "rxjs/Observable";
import { HttpParams } from "@angular/common/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TimelineService {

  constructor(@Inject('Config')public Config,
  @Inject('HttpResponseHandlerService')public HttpResponseHandlerService,
  private http:Http) { 
    // const _this = this

  }
  getTimelineList(request,callback){
    console.log(1111,request)
    return this.http.get(this.Config.baseUrl + 'api/plan',{ params: request }).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    )
  }
  
  createTimeline(request, callback) {
    return this.http.post(this.Config.baseUrl + 'api/plan', request).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }  
    )
  }

  editTimeline(request) {
    return this.http.put(this.Config.baseUrl + 'api/plan/'+ request.id , request).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }  
    )
  }

  deletePlan(request, callback) {
    console.log(request)
    return this.http.delete(this.Config.baseUrl + 'api/plan/'+request.id).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }  
    )
  }
}
