import { Pipe, PipeTransform } from '@angular/core';
import { List } from './list';

@Pipe({
  name: 'unarchivedList'
})
export class UnarchivedListPipe implements PipeTransform {

  transform(Lists: List[]): List[] {
    return Lists.filter((list: List) => {
      return !list.isArchived;
    });
  }
}
