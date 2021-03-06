import { Component } from "@angular/core";
import { AlertController, NavController } from "ionic-angular";

import { TasklistService } from '../../services/tasklist.service';
import { AddItemPage } from "../add-item/addItem.component";


@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})
export class PendingPage {

    constructor( public tasklistService: TasklistService, private navCtrl: NavController, private alertCtrl: AlertController ) {

    }

    addList() {
        const alert = this.alertCtrl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Añadir',
                handler: data => {
                    if ( data.titulo.length === 0 ) {
                        return;
                    }
                    this.navCtrl.push( AddItemPage, {
                        titulo: data.titulo
                    } );
                }
            }]
        });

        alert.present();
    }
}