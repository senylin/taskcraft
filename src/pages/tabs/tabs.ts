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
        tabTitle: ' Task',
        tabIcon: 'list-box'
      },
      {
        root: 'TimelinePage',
        tabTitle: ' WorkTime',
        tabIcon: 'calendar'
      },
      {
        root: AboutPage,
        tabTitle: ' Assist',
        tabIcon: 'contacts'
      }
    ]
  }
}
