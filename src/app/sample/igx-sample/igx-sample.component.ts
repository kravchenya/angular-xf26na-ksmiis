import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IColumnExportingEventArgs,
  IGridToolbarExportEventArgs,
  IgxExcelExporterOptions,
  IgxExcelExporterService,
  IgxGridComponent,
} from 'igniteui-angular';
import { DATA } from 'src/app/data/data';

@Component({
  selector: 'app-igx-sample',
  styleUrls: [`igx-sample.component.scss`],
  templateUrl: 'igx-sample.component.html',
})
export class IgxSampleComponent implements OnInit {
  constructor(private excelExportService: IgxExcelExporterService) {}

  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid!: IgxGridComponent;

  public data: any;

  public ngOnInit(): void {
    this.data = DATA;
  }

  public export() {
    const exporterOptions = new IgxExcelExporterOptions('exportedFile');
    this.excelExportService.export(this.grid, exporterOptions);
  }
}
