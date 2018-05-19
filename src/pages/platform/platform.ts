import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { IonicPage, App, MenuController, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TaskPage } from '../task/task';
import { TimelinePage } from '../timeline/timeline';
import { AssistPage } from './assist/assist';
import { LogPage } from './log/log';
@IonicPage()
@Component({
  selector: 'page-platform',
  templateUrl: 'platform.html'
})
export class PlatformPage {

  following = false;
  user = {
    // name: 'Paula Bolliger',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/img/background/background-5.jpg',
    // occupation: 'Designer',
    // location: 'Seattle, WA',
    description: 'plaese set your signature',
    name: '',
    doneTask: 0,
    doingTask: 0,
    assist: 0
  };

  posts = [
    {
      postImageUrl: 'assets/img/background/background-2.jpg',
      text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
      date: 'November 5, 2016',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      postImageUrl: 'assets/img/background/background-3.jpg',
      text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      date: 'October 23, 2016',
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
      postImageUrl: 'assets/img/background/background-4.jpg',
      date: 'June 28, 2016',
      likes: 46,
      text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
      comments: 66,
      timestamp: '4mo ago'
    },
  ];
  taskDoneList: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,app: App, public menu: MenuController, public cd: ChangeDetectorRef, public alertCtrl: AlertController,@Inject('Config')public Config,
  @Inject('Store')public Store,@Inject('TaskService')public TaskService,@Inject('PlatformService')public PlatformService) {
    console.log(this.Store)
    this.user.name = this.Store.person.userName;
    this.TaskService.getTaskList({taskStatus: 'doing'}).subscribe(res => {
      console.log(res);
      // this.taskList = res.data;
      this.user.doingTask = res.data.length;
    });
    this.TaskService.getTaskList({taskStatus: 'done'}).subscribe(res => {
      console.log(res);
      this.user.doneTask = res.data.length;
      this.taskDoneList = res.data;
    });
    this.PlatformService.getContactList({contactedStatus: 'contact', contactId: this.Store.user._id}).subscribe(res => {
      console.log(res);
      this.user.assist = res.data.length;
    });
    if (this.Store.user._id !== this.Store.person._id) {
      this.following = true;
    } else {
      this.following = false;
    }
  }

  ionViewDidLoad() {
    console.log('Hello ProfileFour Page');
  }
  ionViewWillEnter() {
    console.log(22)
    this.cd.detectChanges();
    this.user.name = this.Store.person.userName;
    this.TaskService.getTaskList({taskStatus: 'doing'}).subscribe(res => {
      console.log(res);
      // this.taskList = res.data;
      this.user.doingTask = res.data.length;
    });
    this.TaskService.getTaskList({taskStatus: 'done'}).subscribe(res => {
      console.log(res);
      this.user.doneTask = res.data.length;
      this.taskDoneList = res.data;
    });
    this.PlatformService.getContactList({contactedStatus: 'contact', contactId: this.Store.user._id}).subscribe(res => {
      console.log(res);
      this.user.assist = res.data.length;
    });
    console.log(this.Store.user.userName, this.Store.person.userName)
    if (this.Store.user._id !== this.Store.person._id) {
      this.following = true;
    } else {
      this.following = false;
    }
    console.log(this.following)
  }
  follow() {
    this.following = !this.following;
    // this.toastCtrl.create('Follow user clicked');
  }

  imageTapped(post) {
    // this.toastCtrl.create('Post image clicked');
  }

  comment(post) {
    // this.toastCtrl.create('Comments clicked');
  }

  like(post) {
    // this.toastCtrl.create('Like clicked');
  }
  activite() {
    this.navCtrl.push(LogPage);
  }
  openMenu() {
   this.menu.open();
  }
  openLogin() {
    this.Store.setPerson(this.Store.user);
    this.navCtrl.popToRoot();
    this.ionViewWillEnter()
  }

  jumpToTask() {
    this.navCtrl.push(TaskPage);
  }
  jumpToTime() {
    this.navCtrl.push(TimelinePage);
  }
  jumpToAssist() {
    this.navCtrl.push(AssistPage);
  }
}
