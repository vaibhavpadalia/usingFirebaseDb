import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DisplayDataComponent } from './display-data/display-data.component';

const routes: Routes = [
    { path: 'main', component: MainPageComponent },
    { path: 'viewData', component: DisplayDataComponent },
    { path: '', component: MainPageComponent},
    { path: '**', component: MainPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent, DisplayDataComponent];
