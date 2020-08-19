import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LabelsComponent } from './labels/labels.component';
import { ModalsComponent } from './modals/modals.component';
import { BulkuploadsComponent } from './bulkuploads/bulkuploads.component';
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
import {FormElementsComponent} from './form-elements/form-elements.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RatingComponent } from './rating/rating.component';
import { HeaderComponent } from './header/header.component';
import { GuidetourComponent } from './guidetour/guidetour.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MenusComponent } from './menus/menus.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ExploreFilterComponent } from './explore-filter/explore-filter.component';
import { FiltersComponent } from './filters/filters.component';
import { TreenavigationComponent } from './treenavigation/treenavigation.component';
import { VariablesComponent } from './variables/variables.component';
import { OnlineDesktopAppComponent } from './online-desktop-app/online-desktop-app.component';
import { BannerComponent } from './banner/banner.component';
import { ListsComponent } from './lists/lists.component';
import { OfflineDesktopAppComponent } from './/offline-desktop-app/offline-desktop-app.component';
import { MetadataComponent } from './metadata/metadata.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AccordionComponent } from './accordion/accordion.component';
import {HelpPageComponent} from './help-page/help-page.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { LibraryComponent } from './library/library.component';
import { IconsComponent } from './icons/icons.component';
import { LandingComponent } from './landing/landing.component';
import { CBSEProgramComponent } from './cbse-program/cbse-program.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { OfflineDownloadManagerComponent } from './offline-download-manager/offline-download-manager.component';
import { MergeAccountComponent } from './merge-account/merge-account.component';
import { OfflineTabComponent } from './offline-tab/offline-tab.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { TestingComponent } from './testing/testing.component';
import { OfflineMenuComponent } from './offline-menu/offline-menu.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { CbseHomepageComponent } from './cbse-homepage/cbse-homepage.component';
import { ManageComponent } from './manage/manage.component';
import { OfflineTestComponent } from './offline-test/offline-test.component';
import { LoginComponent } from './login/login.component';
import { DesktopHelpComponent } from './desktop-help/desktop-help.component';
import { PracticeSetComponent } from './practice-set/practice-set.component';
import { CssGridComponent } from './css-grid/css-grid.component';
import { DownloadComponent } from './download/download.component';
import { OfflineComponent } from './offline/offline.component';
import { NoContentComponent } from './no-content/no-content.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { QmlSolutionsComponent } from './qml-solutions/qml-solutions.component';
import { TelemetryComponent } from './telemetry/telemetry.component';
import { TocLoadingComponent } from './toc-loading/toc-loading.component';
import { schoolingAtHomeComponent } from './schooling-at-home/schooling-at-home.component';
import { AddToLibraryComponent } from './add-to-library/add-to-library.component';
import { SchoolingHomeGroupsComponent } from './schooling-home-groups/schooling-home-groups.component';
import { AddToLibraryChangeComponent } from './add-to-library-change/add-to-library-change.component';
import { CustomeThemeComponent } from './custome-theme/custome-theme.component';
import { NewTocComponent } from './new-toc/new-toc.component';
import { MaintenanceBannerComponent } from './maintenance-banner/maintenance-banner.component';
import { BatchComponentComponent } from './batch-component/batch-component.component';
import { BatchCertificateComponent } from './batch-certificate/batch-certificate.component';
import { DikshaWebAppComponent } from './diksha-web-app/diksha-web-app.component';

const routes: Routes = [
  { path: '', component: GridlayoutComponent},
  { path: 'typography', component: TypographyComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'labels', component: LabelsComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'bulkuploads', component: BulkuploadsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'loaders', component: LoadersComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'toasters', component: ToastersComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'select', component: SelectComponent },
  { path: 'gridlayout', component: GridlayoutComponent },
  { path: 'spacing', component: SpacingComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'page-section', component: PageSectionComponent},
  { path: 'form-elements', component: FormElementsComponent},
  { path: 'pagination', component: PaginationComponent},
  { path: 'rating', component: RatingComponent},
  { path: 'guidetour', component: GuidetourComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'tooltip', component: TooltipComponent},
  { path: 'menus', component: MenusComponent},
  { path: 'workspace', component: WorkspaceComponent},
  { path: 'filters', component: FiltersComponent},
  { path: 'treenavigation', component: TreenavigationComponent},
  { path: 'explore-filter', component: ExploreFilterComponent},
  { path: 'online-desktop-app', component: OnlineDesktopAppComponent},
  { path: 'banner', component: BannerComponent},
  { path: 'lists', component: ListsComponent},
  { path: 'offline-desktop-app', component: OfflineDesktopAppComponent},
  { path: 'metadata', component: MetadataComponent},
  { path: 'test-page', component: TestPageComponent},
  { path: 'accordion', component: AccordionComponent},
  { path: 'help-page', component: HelpPageComponent},
  { path: 'help-center', component: HelpCenterComponent},
  { path: 'variables', component: VariablesComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'icons', component: IconsComponent},
  { path: 'landing', component: LandingComponent},
  { path: 'CBSE-program', component: CBSEProgramComponent},
  { path: 'certificates', component: CertificatesComponent},
  { path: 'merge-account', component: MergeAccountComponent},
  { path: 'offline-download', component: OfflineDownloadManagerComponent},
  { path: 'offline-tab', component: OfflineTabComponent},
  { path: 'account-recovery', component: AccountRecoveryComponent},
  { path: 'testing', component: TestingComponent },
  { path: 'offline-menu', component: OfflineMenuComponent},
  { path: 'assessment', component: AssessmentComponent},
  { path: 'cbse-homepage', component: CbseHomepageComponent},
  { path: 'manage', component: ManageComponent},
  { path: 'offline-test', component: OfflineTestComponent},
  { path: 'offline-login', component: LoginComponent},
  { path: 'desktop-help', component: DesktopHelpComponent},
  { path: 'practical-set', component: PracticeSetComponent},
  { path: 'no-content', component: NoContentComponent},
  { path: 'offline', component: OfflineComponent},
  { path: 'download', component: DownloadComponent},
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'qml-solutions', component:QmlSolutionsComponent },
  { path: 'telemetry', component:TelemetryComponent },
  { path: 'toc-loading', component: TocLoadingComponent},
  { path: 'project-dock', loadChildren: './project-dock/project-dock.module#ProjectDockModule'},
  { path: 'schooling-at-home', component: schoolingAtHomeComponent},
  { path: 'add-to-library', component: AddToLibraryComponent},
  { path: 'school-home-group', component: SchoolingHomeGroupsComponent},
  { path: 'add-to-library-change', component: AddToLibraryChangeComponent},
  { path: 'custom-theme', component: CustomeThemeComponent},
  { path: 'new-toc', component: NewTocComponent},
  { path: 'maintenance-banner', component:MaintenanceBannerComponent},
  { path: 'batch', component:BatchComponentComponent},
  { path: 'batch-certificate', component:BatchCertificateComponent},
  { path: 'diksha-web', component:DikshaWebAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
