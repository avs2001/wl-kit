import { NgModule } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { DrawerComponent } from './drawer/drawer.component';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './side/side.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideItemComponent } from './side/side-item/side-item.component';

@NgModule({
    imports: [
        ContentComponent,
        DrawerComponent,
        HeaderComponent,
        SideComponent,
        ToolbarComponent,
        SideItemComponent
    ],
    exports: [
        ContentComponent,
        DrawerComponent,
        HeaderComponent,
        SideComponent,
        ToolbarComponent,
        SideItemComponent
    ]
})
export class LayoutModule {
}
