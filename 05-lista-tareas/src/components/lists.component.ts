import { Component, Input } from "@angular/core";
import { NavController, AlertController, ItemSliding } from 'ionic-angular';

import { List } from "../models";
import { AddItemPage } from "../pages/add-item/addItem.component";
import { TasklistService } from '../services/tasklist.service';

@Component({
    selector: 'app-lists',
    templateUrl: 'lists.component.html'
})
export class ListsComponent {
    @Input() finished: boolean = false;

    constructor( public tasklistService: TasklistService, private navCtrl: NavController, private alertCtrl: AlertController ) {

    }

    listSelected( list: List){
        this.navCtrl.push( AddItemPage, {
            titulo: list.title,
            lista: list
        })
    }

    updateList( list: List, slidingItem: ItemSliding ){
        slidingItem.close();
        
        const alert = this.alertCtrl.create({
            title: 'Editar nombre',
            message: 'Editar el nombre de la lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista',
                value: list.title
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Guardar',
                handler: data => {
                    if ( data.titulo.length === 0 ) {
                        return;
                    }
                    list.title = data.titulo;
                    this.tasklistService.saveStorage();
                }
            }]
        });

        alert.present();
    }

    deleteList( list: List ){
        this.tasklistService.deleteList( list );
    }
}