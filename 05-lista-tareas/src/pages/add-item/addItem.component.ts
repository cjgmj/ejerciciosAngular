import { Component } from "@angular/core";
import { NavParams, AlertController, ItemSliding } from "ionic-angular";

import { List, ListItem } from "../../models";
import { TasklistService } from '../../services/tasklist.service';

@Component({
    selector: 'page-add-item',
    templateUrl: 'addItem.component.html'
})
export class AddItemPage {

    list: List;
    nameItem: string = '';

    constructor( public tasklistService: TasklistService, private navParams: NavParams, private alertCtrl: AlertController ) {
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

    activeItem( item: ListItem ) {
        item.completed = !item.completed;

        const pending = this.list.items.filter( itemData => {
            return !itemData.completed;
        } ).length;

        if( pending === 0 ){
            this.list.finished = true;
            this.list.finishDate = new Date();
        } else {
            this.list.finished = false;
            this.list.finishDate = null;
        }
        
        this.tasklistService.saveStorage();
    }

    updateItem( item: ListItem, slidingItem: ItemSliding ){
        slidingItem.close();
        
        const alert = this.alertCtrl.create({
            title: 'Editar nombre',
            message: 'Editar el nombre del elemento',
            inputs: [{
                name: 'desc',
                placeholder: 'Nombre del elemento',
                value: item.desc
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Guardar',
                handler: data => {
                    if ( data.desc.length === 0 ) {
                        return;
                    }
                    item.desc = data.desc;
                    this.tasklistService.saveStorage();
                }
            }]
        });

        alert.present();
    }

    deleteItem( idx: number ){
        this.list.items.splice(idx, 1);
        
        this.tasklistService.saveStorage();
    }
}