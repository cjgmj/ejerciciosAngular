import { Component, Input } from "@angular/core";
import { NavController } from 'ionic-angular';

import { List } from "../models";
import { AddItemPage } from "../pages/add-item/addItem.component";
import { TasklistService } from '../services/tasklist.service';

@Component({
    selector: 'app-lists',
    templateUrl: 'lists.component.html'
})
export class ListsComponent {
    @Input() finished: boolean = false;

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