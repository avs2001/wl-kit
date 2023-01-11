import { Router } from '@angular/router';
import { LogoutMenuItem, RouterMenuItem } from 'src/app/utils/menu-item.utils';
import { NAVIGATION_ITEMS } from './sidebar.tokens';

export const navigationItemsProvider = {
    provide: NAVIGATION_ITEMS,
    useFactory(router: Router) {
        return [
            new RouterMenuItem('Dashboard', '/assets/icons/dashboard.svg', '/home', router, [], ['m-t-200']),
            new RouterMenuItem('Test', '/assets/icons/tenant.svg', '/test', router,
                [
                    new RouterMenuItem('Test Child 1', '/assets/icons/tenant.svg', '/test/test-child', router,
                        [
                            new RouterMenuItem('Test Child 1 Child 1', '/assets/icons/tenant.svg', '/test/test-child/test-child-child', router, []
                            ),
                        ]
                    ),
                    new RouterMenuItem('Dummy - no route', '/assets/icons/tenant.svg', 'wrong', router, [])
                ]
            ),
            new LogoutMenuItem('Logout', '/assets/icons/logout.svg', ['item-logout']),
        ];
    },
    deps: [Router]
}