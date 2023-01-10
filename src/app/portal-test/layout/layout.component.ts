import { SideComponent } from './../../components/layout/side/side.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { DrawerComponent } from 'src/app/components/layout/drawer/drawer.component';
import { ContentComponent } from 'src/app/components/layout/content/content.component';
import { ToolbarComponent } from 'src/app/components/layout/toolbar/toolbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'kbm-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderComponent, DrawerComponent, SidebarComponent, SideComponent, ContentComponent, ToolbarComponent],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

}
