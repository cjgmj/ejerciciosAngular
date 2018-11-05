import { Component } from "@angular/core";
import { TasklistService } from '../../services/tasklist.service';
import { NavController } from 'ionic-angular';

import { List } from "../../models";
import { AddItemPage } from "../add-item/addItem.component";

@Component({
    selector: 'page-finished',
    templateUrl: 'finished.component.html'
})
export class FinishedPage {
    constructor( public tasklistService: TasklistService, private navCtrl: NavController ) {

    }

    listSelected( list: List){
        this.navCtrl.push( AddItemPage, {
            titulo: list.title,
            lista: list
        })
    }

    deleteList( list: List ){
        this.tasklistService.deleteList( list );
    }
}