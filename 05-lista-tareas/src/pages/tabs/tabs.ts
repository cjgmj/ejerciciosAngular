import { Component } from '@angular/core';
import { PendingPage } from '../pending/pending.component';
import { FinishedPage } from '../finished/finished.component';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabPending = PendingPage;
  tabFinished = FinishedPage;

  constructor() {

  }
}
