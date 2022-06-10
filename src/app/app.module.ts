import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IgxExcelExporterService, IgxGridModule } from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from './directives/prevent-scroll.directive';
import { IgxSampleComponent } from './sample/igx-sample/igx-sample.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, IgxSampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxPreventDocumentScrollModule,
    IgxGridModule,
  ],
  providers: [IgxExcelExporterService],
  entryComponents: [],
  schemas: [],
})
export class AppModule {}
