import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots:Object = [];

  constructor() {
    this.tabRoots = [
      {
        root: 'TaskPage',
        tabTitle: '任务',
        tabIcon: 'list-box'
      },
      {
        root: 'TimelinePage',
        tabTitle: ' 时间',
        tabIcon: 'calendar'
      },
      {
        root: 'PlatformPage',
        tabTitle: ' 协作',
        tabIcon: 'contacts'
      }
    ]
  }
}
