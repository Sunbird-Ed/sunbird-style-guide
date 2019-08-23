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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }