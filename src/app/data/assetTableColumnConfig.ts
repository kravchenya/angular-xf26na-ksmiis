export interface IAssetTableColumnConfig {
  cellEditorTemplate?: string;
  cellTemplate?: string;
  dataType: string;
  disableHiding: AssetType[];
  editable: boolean;
  field: string;
  fieldType?: ColumnType;
  filterable: boolean;
  formatDate?: boolean;
  formatSerialNo?: boolean;
  header: string;
  headerClasses?: string;
  hidden: AssetType[];
  indexIgAndSt?: number;
  indexOnlyIg?: number;
  indexOnlySt?: number;
  pinned: AssetType[];
  resizable: boolean;
  sortable: boolean;
  title?: string;
}

export enum ColumnType {
  Cdm,
  CommentWeb,
  CountryDisplay,
  Events,
  LastMeasurementAsDate,
  IoTLandingPage,
  Map,
  SerialNo,
  StatusDisplay,
}

export enum AssetType {
  Ig,
  St,
  IgAndSt,
}

export const AssetsTableColumnConfig: IAssetTableColumnConfig[] = [
  {
    cellTemplate: 'eventsCellTemplate',
    dataType: 'string',
    disableHiding: [],
    editable: false,
    field: 'Events',
    fieldType: ColumnType.Events,
    filterable: false,
    header: 'ASSETS_TABLE_EVENTS_HEADER',
    hidden: [],
    indexIgAndSt: 0,
    indexOnlyIg: 0,
    indexOnlySt: 0,
    pinned: [AssetType.Ig, AssetType.St, AssetType.IgAndSt],
    resizable: true,
    sortable: true,
    title: 'Some title',
  },
];
