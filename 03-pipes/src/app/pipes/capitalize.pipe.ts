import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    transform( value: string, todos: boolean = true ): string {

        value = value.toLowerCase();

        const nombres: string[] = value.split(' ');

        if (todos) {
            for (const i in nombres) {
                if (nombres.hasOwnProperty(i)) {
                    nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
                }
            }
        } else {
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }

        return nombres.join(' ');
    }
}