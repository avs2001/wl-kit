import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './portal-test/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: 'home', component: DashboardComponent
    },
    {
        path: 'test', loadChildren: () =>
            import('./portal-test/test/test-routing.module').then(m => m.TestRoutingModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
