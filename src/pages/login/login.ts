// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component,Inject } from '@angular/core';
import { AlertController, App, LoadingController, IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TaskPage } from '../task/task';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: any = {
    userName:"",
    password:""
  };
  public backgroundImage = 'assets/img/background/background-5.jpg';

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    @Inject('Config')public Config,
    @Inject('Store')public Store,
    @Inject('LoginService')public LoginService
  ) {

    console.log(this.Config.baseUrl);
  }
  openRegister() {
    const alert = this.alertCtrl.create({
      title: 'Register',
      inputs: [
        {
          name: 'userName',
          placeholder: 'userName'
        },
        {
          name: 'password',
          placeholder: 'password'
        },
        {
          name: 'email',
          placeholder: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data: any) => {
            console.log('Saved clicked', data);
            this.register(data);
          }
        }
      ]
    });

    alert.present();
  }
  register(data) {
    console.log(data);
    this.LoginService.getRegister({
      userName:data.userName,
      password:data.password,
      role:[],
      email:data.email
    },data=>{
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: data.message,
        buttons: ['close']
      });
      alert.present();
    })
  }
  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      // const alert = this.alertCtrl.create({
      //   title: '登陆成功!',
      //   subTitle: '',
      //   buttons: ['关闭']
      // });
      // alert.present();
    });
    this.LoginService.getUser({
      userName:this.loginForm.userName
    },data=>{
      console.log(data);
      if(data.data.password === this.loginForm.password){
        loading.present();
        this.Store.setPerson(data.data);
        this.Store.setUser(data.data);
        // this.LoginService.postToken({})
        // this.push.onResume('登陆成功')
        this.navCtrl.push(TabsPage);
      }else{
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: '用户密码错误',
          buttons: ['close']
        });
        alert.present();
      }
    })
    // this.navCtrl.push(TabsPage);

  }

  goToSignup() {
    // this.navCtrl.push(SignupPage);
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }
}
