import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';

import { TasklistService } from '../../services/tasklist.service';


@Component({
    selector: 'page-finished',
    templateUrl: 'finished.component.html'
})
export class FinishedPage {
    constructor( public tasklistService: TasklistService, private navCtrl: NavController ) {

    }
}