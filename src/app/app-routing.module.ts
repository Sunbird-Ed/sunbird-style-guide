import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LabelsComponent } from './labels/labels.component';
import { ModalsComponent } from './modals/modals.component';
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
import { FooterComponent } from './footer/footer.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MenusComponent } from './menus/menus.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ExploreFilterComponent } from './explore-filter/explore-filter.component';
import { FiltersComponent } from './filters/filters.component';
import { TreenavigationComponent } from './treenavigation/treenavigation.component';
import { OfflineComponent } from './offline/offline.component';
import { BannerComponent } from './banner/banner.component';
import { ListsComponent } from './lists/lists.component';
import { OfflineTelemetryComponent } from './offline-telemetry/offline-telemetry.component';
import { MetadataComponent } from './metadata/metadata.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AccordionComponent } from './accordion/accordion.component';
import {HelpPageComponent} from './help-page/help-page.component';
import { HelpCenterComponent } from './help-center/help-center.component';



const routes: Routes = [
  { path: '', component: GridlayoutComponent},
  { path: 'typography', component: TypographyComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'labels', component: LabelsComponent },
  { path: 'modals', component: ModalsComponent },
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
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'tooltip', component: TooltipComponent},
  { path: 'menus', component: MenusComponent},
  { path: 'workspace', component: WorkspaceComponent},
  { path: 'filters', component: FiltersComponent},
  { path: 'treenavigation', component: TreenavigationComponent},
  { path: 'explore-filter', component: ExploreFilterComponent},
  { path: 'offline', component: OfflineComponent},
  { path: 'banner', component: BannerComponent},
  { path: 'lists', component: ListsComponent},
  { path: 'telemetry', component: OfflineTelemetryComponent},
  { path: 'metadata', component: MetadataComponent},
  { path: 'test-page', component: TestPageComponent},
  { path: 'accordion', component: AccordionComponent},
  { path: 'help-page', component: HelpPageComponent},
  { path: 'help-center', component: HelpCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }