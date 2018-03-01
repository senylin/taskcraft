import { Injectable,Inject } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class HttpResponseHandlerService {

  constructor(@Inject('Config')public Config,public alertCtrl: AlertController) { }
  success = function (response, errorCodeMap) {
      
    if (response.json().result == 100) {
      return {
          status: 200,
          message: response.json().message,
          data: response.json().data
      };
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Error Message',
        subTitle: response.json().message,
        buttons: ['close']
      });
      alert.present();
      return {
        status: response.json().status
      }
    }
  };

  error = function (response) {
    return {
      status: response.json().status
    }
  }
}
