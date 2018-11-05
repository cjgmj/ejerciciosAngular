import { Injectable } from "@angular/core";
import { List } from '../models';

@Injectable()
export class TasklistService{

    lists: List[] = [];

    constructor() {
        const list1 = new List('Lista 1');
        const list2 = new List('Lista 2');

        this.lists.push(list1, list2);

        console.log(this.lists);
    }
}