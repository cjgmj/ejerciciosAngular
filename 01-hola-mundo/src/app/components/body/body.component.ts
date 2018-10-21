import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    show = true;

    card: any = {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        title: 'Lorem Ipsum'
    };

    list: string[] = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Etiam in elit euismod, lobortis lacus nec, accumsan purus.',
    'Nam pharetra vitae massa vitae convallis.'];
}
