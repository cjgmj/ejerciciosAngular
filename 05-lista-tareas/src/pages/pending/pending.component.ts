import { Component } from "@angular/core";
import { TasklistService } from '../../services/tasklist.service';
import { NavController, AlertController } from "ionic-angular";
import { List } from "../../models";
import { AddListPage } from "../add-list/addList.component";

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})
export class PendingPage {

    constructor( public tasklistService: TasklistService, private navCtrl: NavController, private alertCtrl: AlertController ) {

    }

    listSelected( list: List) {
        console.log(list.title);
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
                    if(data.titulo.length === 0){
                        return;
                    }
                    this.navCtrl.push( AddListPage, {
                        titulo: data.titulo
                    } );
                }
            }]
        });

        alert.present();
    }

}