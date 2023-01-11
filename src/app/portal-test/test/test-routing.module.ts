import { TestComponent } from './test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestChildComponent } from './test-child/test-child.component';

const routes: Routes = [
    {
        path: '',
        component: TestComponent,
    },
    {
        path: 'test-child',
        component: TestChildComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TestRoutingModule { }
