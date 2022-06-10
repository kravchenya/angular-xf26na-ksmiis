import { QueryList } from '@angular/core';
import { IgxRowDirective } from 'igniteui-angular/lib/grids/row.directive';
import { DATA } from 'src/app/data/data';

export class ColumnExportHandler {
  constructor(private data: any[], private rows: QueryList<IgxRowDirective>) {}

  handleExportForRow(rowIndex: number): string | number {
    const rowForThisAsset = this.rows.find((r) => r.index == rowIndex);
    const dataItem = this.data.find(
      (a) => a.ProductID === rowForThisAsset?.data?.ProductID
    );

    if (!dataItem) {
      return ' ';
    }

    return 'replaced content';
  }
}
