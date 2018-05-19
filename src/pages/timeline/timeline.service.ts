import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from "rxjs/Observable";
import { HttpParams } from "@angular/common/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TimelineService {

  constructor(@Inject('Config')public Config,@Inject('Store')public Store,
  @Inject('HttpResponseHandlerService')public HttpResponseHandlerService,
  private http:Http) { 
    // const _this = this

  }
  getTimelineList(request,callback){
    console.log(1111,request)
    return this.http.get(this.Config.baseUrl + 'api/plan',{ params: {...request, userId: this.Store.person._id} }).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }
    )
  }
  
  createTimeline(request, callback) {
    return this.http.post(this.Config.baseUrl + 'api/plan', {...request, userId: this.Store.person._id, byUserId: this.Store.user._id}).map( res => {
        return this.HttpResponseHandlerService.success(res);
      },
      error => {
        return this.HttpResponseHandlerService.error(error);
      }  
    )
  }

  editTimeline(request) {
    return this.http.put(this.Config.baseUrl + 'api/plan/'+ request.id , {...request, userId: this.Store.person._id, byUserId: this.Store.user._id}).map( res => {
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
