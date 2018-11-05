import { Component } from "@angular/core";
import { TasklistService } from '../../services/tasklist.service';
import { List } from "../../models";

@Component({
    selector: 'page-finished',
    templateUrl: 'finished.component.html'
})
export class FinishedPage {
    constructor( public tasklistService: TasklistService ) {

    }

    listSelected( list: List){
        console.log(list.title);
    }
}