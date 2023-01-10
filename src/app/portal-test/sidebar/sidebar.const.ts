import { Router } from '@angular/router';
import { LogoutMenuItem, RouterMenuItem } from 'src/app/utils/menu-item.utils';
import { NAVIGATION_ITEMS } from './sidebar.tokens';

export const navigationItemsProvider = {
    provide: NAVIGATION_ITEMS,
    useFactory(router: Router) {
        return [
            new RouterMenuItem('Dashboard', '/assets/icons/dashboard.svg', '/home', router, ['m-t-200']),
            new RouterMenuItem('Test', '/assets/icons/tenant.svg', '/test', router),
            new LogoutMenuItem('Logout', '/assets/icons/logout.svg', ['item-logout']),
        ];
    },
    deps: [Router]
}