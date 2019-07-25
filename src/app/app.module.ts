import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickModule } from 'ngx-slick';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/htmlbars';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SuiModule, SuiTabsModule, SuiSelectModule } from 'ng2-semantic-ui';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { TabsComponent } from './tabs/tabs.component';
import { SelectComponent } from './select/select.component';

import { GridlayoutComponent } from './gridlayout/gridlayout.component';
import { SpacingComponent } from './spacing/spacing.component';
import { CardsComponent } from './cards/cards.component';
import { PageSectionComponent } from './page-section/page-section.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RatingComponent } from './rating/rating.component';
import { GuidetourComponent } from './guidetour/guidetour.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MenusComponent } from './menus/menus.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { FiltersComponent } from './filters/filters.component';
import { TreenavigationComponent } from './treenavigation/treenavigation.component';
import { ExploreFilterComponent } from './explore-filter/explore-filter.component';
import { TestPageComponent } from './test-page/test-page.component';

import { CustomerService } from './services/table-data.service';

import { SortService } from './sortable-table/sort.service';
import { SortableTableDirective } from './sortable-table/sortable-table.directive';
import { SortableColumnComponent } from './sortable-table/sortable-column.component';

// requires BrowserAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import HeadroomModule
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { BannerComponent } from './banner/banner.component';
import { ListsComponent } from './lists/lists.component';
import { MetadataComponent } from './metadata/metadata.component';
import { OnlineDesktopAppComponent } from './online-desktop-app/online-desktop-app.component';
import { OfflineDesktopAppComponent } from './offline-desktop-app/offline-desktop-app.component';
import { VariablesComponent } from './variables/variables.component';
import { AccordionComponent } from './accordion/accordion.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { LibraryComponent } from './library/library.component';
import { IconsComponent } from './icons/icons.component';
import { LandingComponent } from './landing/landing.component';
import { CBSEProgramComponent } from './cbse-program/cbse-program.component';
import { CertificatesComponent } from './certificates/certificates.component';
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
    ToastersComponent,
    TabsComponent,
    SelectComponent,
    GridlayoutComponent,
    SpacingComponent,
    CardsComponent,
    PageSectionComponent,
    FormElementsComponent,
    PaginationComponent,
    RatingComponent,
    GuidetourComponent,
    HeaderComponent,
    FooterComponent,
    TooltipComponent,
    MenusComponent,
    WorkspaceComponent,
    FiltersComponent,
    TreenavigationComponent,
    SortableColumnComponent,
    BannerComponent,
    ListsComponent,
    OnlineDesktopAppComponent,
    VariablesComponent,
    ExploreFilterComponent,
    SortableTableDirective,
    MetadataComponent,
    OfflineDesktopAppComponent,
    TestPageComponent,
    AccordionComponent,
    HelpPageComponent,
    HelpCenterComponent,
    LibraryComponent,
    IconsComponent,
    LandingComponent,
    CBSEProgramComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightModule.forRoot({ languages: hljsLanguages }),
    SuiModule,
    Ng2SearchPipeModule,
    Ng2IziToastModule,
    SlickModule,
    ClipboardModule,
    SuiTabsModule,
    SuiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    HeadroomModule,
    NgxPageScrollModule
  ],
  providers: [CustomerService, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }