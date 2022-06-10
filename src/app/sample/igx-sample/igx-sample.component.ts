import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  IColumnExportingEventArgs,
  IGridToolbarExportEventArgs,
  IgxExcelExporterOptions,
  IgxExcelExporterService,
  IgxGridComponent,
  IRowExportingEventArgs,
} from 'igniteui-angular';
import {
  AssetsTableColumnConfig,
  IAssetTableColumnConfig,
} from 'src/app/data/assetTableColumnConfig';
import { DATA } from 'src/app/data/data';
import { ColumnExportHandler } from './column-export-handler';

@Component({
  selector: 'app-igx-sample',
  styleUrls: [`igx-sample.component.scss`],
  templateUrl: 'igx-sample.component.html',
})
export class IgxSampleComponent implements OnInit {
  constructor(
    private excelExportService: IgxExcelExporterService
  ) // private readonly cdRef: ChangeDetectorRef
  {}

  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid!: IgxGridComponent;
  // public AssetsTableColumnConfig: IAssetTableColumnConfig[];
  // public cellTemplates: { [id: string]: TemplateRef<any> } = {};

  @ViewChild('eventsCellTemplate') public eventsCellTemplate: TemplateRef<any>;

  public data: any;

  public ngOnInit(): void {
    this.data = DATA;
    // this.AssetsTableColumnConfig = AssetsTableColumnConfig;
    // this.cellTemplates['eventsCellTemplate'] = this.eventsCellTemplate;
    // this.cdRef.detectChanges();
  }

  public export() {
    const columnExportHandler = new ColumnExportHandler(
      this.grid.data,
      this.grid.rowList
    );

    const rowSub = this.excelExportService.rowExporting.subscribe(
      (args: IRowExportingEventArgs) => {
        args.rowData.ProductName = columnExportHandler.handleExportForRow(
          args.rowIndex
        );
      }
    );

    const exporterOptions = new IgxExcelExporterOptions('exportedFile');
    this.excelExportService.export(this.grid, exporterOptions);

    rowSub.unsubscribe();
  }
}
