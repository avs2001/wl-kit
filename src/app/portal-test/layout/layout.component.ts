import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@Component({
    selector: 'kbm-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderComponent, LayoutModule, SidebarComponent],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

}
