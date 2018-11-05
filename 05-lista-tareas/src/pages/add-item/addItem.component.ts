import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { List, ListItem } from "../../models";
import { TasklistService } from '../../services/tasklist.service';

@Component({
    selector: 'page-add-item',
    templateUrl: 'addItem.component.html'
})
export class AddItemPage {

    list: List;
    nameItem: string = '';

    constructor( public tasklistService: TasklistService, private navParams: NavParams ) {
        const titulo= this.navParams.get('titulo');

        if( this.navParams.get('lista') ){
            this.list = this.navParams.get('lista');
        } else {
            this.list = new List(titulo);
            
            this.tasklistService.addList( this.list );
        }

    }

    addItem() {
        if ( this.nameItem.length === 0 ){
            return;
        }
        const item = new ListItem(this.nameItem);
        this.list.items.push(item);

        this.tasklistService.saveStorage();

        this.nameItem = '';
    }

    updateItem( item: ListItem ) {
        item.completed = !item.completed;

        const pending = this.list.items.filter( itemData => {
            return !itemData.completed;
        } ).length;

        if( pending === 0 ){
            this.list.finished = true;
            this.list.finishDate = new Date();
        }
        
        this.tasklistService.saveStorage();
    }

    deleteItem( idx: number ){
        this.list.items.splice(idx, 1);
        
        this.tasklistService.saveStorage();
    }
}