import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { TasklistService } from '../../services/tasklist.service';
import { List } from "../../models";

@Component({
    selector: 'page-add-list',
    templateUrl: 'addList.component.html'
})
export class AddListPage {

    list: List;

    constructor( public tasklistService: TasklistService, private navParams: NavParams ) {
        const titulo= this.navParams.get('titulo');

        this.list = new List(titulo);
    }
}