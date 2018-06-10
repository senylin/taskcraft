import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { IonicPage, App, MenuController, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../../login/login';
import { PlatformPage } from '../platform';
/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assist',
  templateUrl: 'assist.html',
})
export class AssistPage {
  showSearch: boolean = false
  assistList: any[] = [
  ]
  assistedList: any[] = [
  ]
  searchList: any = []
  queryText: string = ''
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App, public menu: MenuController, public cd: ChangeDetectorRef,public alertCtrl: AlertController,@Inject('Config')public Config,
    @Inject('Store')public Store,@Inject('PlatformService')public PlatformService,@Inject('LoginService')public LoginService) {
    menu.enable(true);
    this.PlatformService.getContactList({contactedStatus: 'contact', contactId: this.Store.user._id}).subscribe(res => {
      console.log(res);
      this.assistList = res.data;
    });
    this.PlatformService.getContactList({contactedStatus: 'contacted', contactId: this.Store.user._id}).subscribe(res => {
      console.log(res);
      this.assistedList = res.data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }
  openMenu() {
   this.menu.open();
  }
  openLogin() {
    this.Store.setPerson(this.Store.user);
    this.navCtrl.popToRoot();
  }
  showToggle() {
    this.showSearch = !this.showSearch;
  }
  searchUser() {
    this.PlatformService.getUsers({userName: this.queryText}).subscribe(res => {
      this.searchList = res.data;
      this.showSearch = true;
    });
  }
  assist(val: any) {
    console.log(val);
    let assistStatus = false;
    const val_id = val.contactedId ? val.contactedId : val._id;
    this.assistedList.forEach(data => {
      if (val_id === data.contactedId) {
        assistStatus = true;
      }
    })
    console.log(assistStatus)
    if (assistStatus) {
      this.PlatformService.editContact({
        id: val._id,
        contactedStatus: 'contact',
        contactTime: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
      }).subscribe( res => {
        if (res.data) {
          const alert = this.alertCtrl.create({
            title: '协助成功',
            subTitle: '',
            buttons: ['Ok']
          });
          this.PlatformService.getContactList({contactedStatus: 'contact', contactId: this.Store.user._id, contactName: this.Store.user.userName, contact: this.Store}).subscribe(res => {
            console.log(res);
            this.assistList = res.data;
          });
          this.PlatformService.getContactList({contactedStatus: 'contacted', contactId: this.Store.user._id}).subscribe(res => {
            console.log(res);
            this.assistedList = res.data;
          });
        }
      })
    } else {
      this.PlatformService.createContact({
        contactId: this.Store.user._id,
        contactName: this.Store.user.userName,
        contact: this.Store.user,
        contactedId: val.contactedId ? val.contactedId : val._id,
        contactedName: val.contactedName ? val.contactedName : val.userName 
      }).subscribe( res => {
        if (res.data) {
          const alert = this.alertCtrl.create({
            title: '协助成功',
            subTitle: '',
            buttons: ['Ok']
          });
          this.PlatformService.getContactList({contactedStatus: 'contact', contactId: this.Store.user._id}).subscribe(res => {
            console.log(res);
            this.assistList = res.data;
          });
          this.PlatformService.getContactList({contactedStatus: 'contacted', contactId: this.Store.user._id}).subscribe(res => {
            console.log(res);
            this.assistedList = res.data;
          });
        }
      })
    }
  }
  unAssist(val: any) {
    console.log(val);
    this.PlatformService.editContact({
      id: val._id,
      contactedStatus: 'contacted',
      contactedTime: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
    }).subscribe( res => {
      if (res.data) {
        const alert = this.alertCtrl.create({
          title: '放弃成功',
          subTitle: '',
          buttons: ['Ok']
        });
        this.PlatformService.getContactList({contactedStatus: 'contact', contactId: this.Store.user._id}).subscribe(res => {
          console.log(res);
          this.assistList = res.data;
        });
        this.PlatformService.getContactList({contactedStatus: 'contacted', contactId: this.Store.user._id}).subscribe(res => {
          console.log(res);
          this.assistedList = res.data;
        });
      }
    })
  }
  jumpToPerson(item) {
    this.PlatformService.getUser({_id: item.contactedId}).subscribe(res => {
      if(res.data) {
        this.navCtrl.popToRoot();
        this.Store.setPerson(res.data);
        this.cd.detectChanges();
        // this.navCtrl.push(PlatformPage);
      }
    })
  }
  ionViewDidLeave() {
    console.log(111)
    this.cd.detectChanges();
  }
}
