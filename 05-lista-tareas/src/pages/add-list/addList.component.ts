import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { List, ListItem } from "../../models";
import { TasklistService } from '../../services/tasklist.service';

@Component({
    selector: 'page-add-list',
    templateUrl: 'addList.component.html'
})
export class AddListPage {

    list: List;
    nameItem: string = '';

    constructor( public tasklistService: TasklistService, private navParams: NavParams ) {
        const titulo= this.navParams.get('titulo');

        this.list = new List(titulo);
    }

    addItem() {
        if ( this.nameItem.length === 0 ){
            return;
        }
        const item = new ListItem(this.nameItem);
        this.list.items.push(item);

        this.nameItem = '';
    }

    updateItem( item: ListItem ) {
        item.completed = !item.completed;
    }

    deleteItem( idx: number ){
        this.list.items.splice(idx, 1);
    }
}