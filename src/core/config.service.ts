import { Injectable ,Inject} from '@angular/core';
import { InterceptorService } from 'ng2-interceptors';
import { Http, Headers } from '@angular/http';
declare var $:any;
@Injectable()
export class Config {

  public baseUrl:any;
  public headers: any;
  constructor() {

    let baseHost = "http://" + window.location.hostname + ":7001";
    
    if(window.location.hostname == "localhost" || window.location.hostname == "127.0.0.1") {
        baseHost = "http://localhost:7001";
    }
    this.baseUrl = baseHost + "/";

    // this.headers = new Headers().set('Content-Type', 'application/x-www-form-urlencoded')
    // .set('Authorization', 'Basic bXlfYXBwOm15X3NlY3JldA==')
   }


  version = "0.1 alpha";

  session = {
        isAuthorized: false,
        iam: null,
        csptToken: null,
        platform: null,
        organizationCode:null,
        user: null
    };


  page = {
        "pageStart": 1,
        "pageSize":10,
        "maxPageSize":999,
        "maxSearchResult":200,
        "currentPage":1
    };



}
