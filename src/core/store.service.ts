import { Injectable ,Inject} from '@angular/core';
import { InterceptorService } from 'ng2-interceptors';

declare var $:any;
@Injectable()
export class Store {

  public user: any = {};
  public date: any = '';
  public person: any = {};
  constructor(@Inject('Config')public Config) {
  }
  setUser(val) {
    this.user = val;
  }
  setDate(val) {
    this.date = val;
  }
  setPerson(val) {
    this.person = val;
  }
}
