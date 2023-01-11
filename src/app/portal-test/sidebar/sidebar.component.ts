import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, HostBinding, Inject, Input } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { CLIENT_LOGO_ICON, NAVIGATION_ITEMS } from './sidebar.tokens';
import { MatListModule } from '@angular/material/list';
import { navigationItemsProvider } from './sidebar.const';
import { RouterModule } from '@angular/router';
import { ActiveRouteDirective } from '../../directives/active-route.directive';
import { MenuItem, RouterMenuItem } from '../../utils/menu-item.utils';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@Component({
    selector: 'kbm-sidebar',
    standalone: true,
    imports: [CommonModule, BrowserAnimationsModule, RouterModule, MatListModule, ActiveRouteDirective, LayoutModule, KeyValuePipe],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    providers: [navigationItemsProvider]
})
export class SidebarComponent {

    @Input()
    @HostBinding('class.opened')
    open!: boolean;

    constructor(
        @Inject(NAVIGATION_ITEMS) public navigationItems: MenuItem[],
        @Inject(CLIENT_LOGO_ICON) public clientLogoIcon: string
    ) { 
        console.log(navigationItems)
    }

    getNavigationRoute(navigationItem: MenuItem) {
        let navigationRoute = (navigationItem as RouterMenuItem).navigationRoute
        return navigationRoute ? navigationRoute : 'no-navigation'
    }

}
