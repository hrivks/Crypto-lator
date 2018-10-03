import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../../model/model';

@Pipe({
  name: 'filterCurrency'
})
export class FilterCurrencyPipe implements PipeTransform {

  transform(items: Currency[], filterText?: string): any {
    if (!items) {
      return [];
    }
    if (!filterText) {
      return items;
    }

    filterText = filterText.toLowerCase();

    return items.filter((i) => {
      return i.name.toLowerCase().indexOf(filterText) > -1 || i.symbol.toLowerCase().indexOf(filterText) > -1;
    });

  }

}
