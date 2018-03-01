import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { TaskPage } from '../task/task';
import { TimelinePage } from '../timeline/timeline';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots:Object = [];

  constructor() {
    this.tabRoots = [
      {
        root: 'TaskPage',
        tabTitle: ' Task',
        tabIcon: 'list-box'
      },
      {
        root: 'TimelinePage',
        tabTitle: ' Timeline',
        tabIcon: 'calendar'
      },
      {
        root: AboutPage,
        tabTitle: ' Platform',
        tabIcon: 'contacts'
      }
    ]
  }
}
