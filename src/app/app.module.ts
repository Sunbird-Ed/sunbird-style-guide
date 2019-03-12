import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/htmlbars';
import { ClipboardModule } from 'ngx-clipboard';

import { SuiModule } from 'ng2-semantic-ui';
import { Ng2IziToastModule } from 'ng2-izitoast';

import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TemplateComponent } from './template/template.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalsComponent } from './modals/modals.component';
import { LabelsComponent } from './labels/labels.component';
import { TypographyComponent } from './typography/typography.component';
import { OverviewComponent } from './overview/overview.component';
import { SearchComponent } from './search/search.component';
import { TablesComponent } from './tables/tables.component';
import { ColorsComponent } from './colors/colors.component';
import { LoadersComponent } from './loaders/loaders.component';
import { FormsComponent } from './forms/forms.component';
import { ToastersComponent } from './toasters/toasters.component';


/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    {name: 'html', func: html},
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    EscapeHtmlPipe,
    SidebarComponent,
    TemplateComponent,
    ButtonsComponent,
    ModalsComponent,
    LabelsComponent,
    TypographyComponent,
    OverviewComponent,
    SearchComponent,
    TablesComponent,
    ColorsComponent,
    LoadersComponent,
    FormsComponent,
    ToastersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightModule.forRoot({ languages: hljsLanguages }),
    SuiModule,
    Ng2IziToastModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }