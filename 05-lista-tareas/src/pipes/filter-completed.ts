import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models';

/**
 * Generated class for the FilterCompletedPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterCompleted',
  pure: false
})
export class FilterCompletedPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform( lists: List[], completed: boolean ) {
    return lists.filter( list => {
      return list.finished === completed;
    });
  }
}
