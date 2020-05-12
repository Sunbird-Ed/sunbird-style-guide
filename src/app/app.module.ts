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
import { BulkuploadsComponent } from './bulkuploads/bulkuploads.component';
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
import { OfflineDownloadManagerComponent } from './offline-download-manager/offline-download-manager.component';
import { MergeAccountComponent } from './merge-account/merge-account.component';
import { OfflineTabComponent } from './offline-tab/offline-tab.component';
import { TestingComponent } from './testing/testing.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { OfflineMenuComponent } from './offline-menu/offline-menu.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { CbseHomepageComponent } from './cbse-homepage/cbse-homepage.component';
import { ManageComponent } from './manage/manage.component';
import { StateComponent } from './state/state.component';
import { ClassComponent } from './class/class.component';
import { MediumComponent } from './medium/medium.component';
import { OfflineAppbarComponent } from './offline-appbar/offline-appbar.component';
import { OfflineHeaderComponent } from './offline-header/offline-header.component';
import { OfflineTestComponent } from './offline-test/offline-test.component';
import { OfflineMenubarComponent } from './offline-menubar/offline-menubar.component';
import { LoginComponent } from './login/login.component';
import { DesktopHelpComponent } from './desktop-help/desktop-help.component';
import { PracticeSetComponent } from './practice-set/practice-set.component';
import { DesktopSearchResultComponent } from './desktop-search-result/desktop-search-result.component';
import { PillsCarouselComponent } from './pills-carousel/pills-carousel.component';
import { CssGridComponent } from './css-grid/css-grid.component';
import { NoContentComponent } from './no-content/no-content.component';
import { OfflineComponent } from './offline/offline.component';
import { DownloadComponent } from './download/download.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { QmlSolutionsComponent } from './qml-solutions/qml-solutions.component';
import { TelemetryComponent } from './telemetry/telemetry.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { TocLoadingComponent } from './toc-loading/toc-loading.component';
import { schoolingAtHomeComponent } from './schooling-at-home/schooling-at-home.component';
import { SchoolingInformationComponent } from './schooling-at-home/schooling-information/schooling-information.component';
import { SchoolingBoxLayoutComponent } from './schooling-at-home/schooling-box-layout/schooling-box-layout.component';
import { AddToLibraryComponent } from './add-to-library/add-to-library.component';
import { SchoolingHomeGroupsComponent } from './schooling-home-groups/schooling-home-groups.component';
import { GroupFormComponent } from './schooling-home-groups/group-form/group-form.component';
import { MembersComponent } from './schooling-home-groups/members/members.component';
import { CoursesComponent } from './schooling-home-groups/courses/courses.component';
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
    BulkuploadsComponent,
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
    CertificatesComponent,
    OfflineDownloadManagerComponent,
    MergeAccountComponent,
    OfflineTabComponent,
    AccountRecoveryComponent,
    TestingComponent,
    OfflineMenuComponent,
    AssessmentComponent,
    CbseHomepageComponent,
    ManageComponent,
    StateComponent,
    ClassComponent,
    MediumComponent,
    OfflineAppbarComponent,
    OfflineHeaderComponent,
    OfflineTestComponent,
    OfflineMenubarComponent,
    LoginComponent,
    DesktopHelpComponent,
    PracticeSetComponent,
    DesktopSearchResultComponent,
    PillsCarouselComponent,
    CssGridComponent,
    NoContentComponent,
    OfflineComponent,
    DownloadComponent,
    ProfilePageComponent,
    QmlSolutionsComponent,
    TelemetryComponent,
    SkeletonLoaderComponent,
    TocLoadingComponent,
    schoolingAtHomeComponent,
    SchoolingInformationComponent,
    SchoolingBoxLayoutComponent,
    AddToLibraryComponent,
    SchoolingHomeGroupsComponent,
    GroupFormComponent,
    MembersComponent,
    CoursesComponent
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