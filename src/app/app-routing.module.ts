import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './portal-test/dashboard/dashboard.component';
import { TestComponent } from './portal-test/test/test.component';

const routes: Routes = [
    {
        path: 'home', component: DashboardComponent
    },
    {
        path: 'test', component: TestComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
