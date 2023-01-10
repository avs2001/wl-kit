import { InjectionToken } from "@angular/core";
import { MenuItem } from "src/app/utils/menu-item.utils";

export const CLIENT_LOGO_ICON: InjectionToken<string> = new InjectionToken<string>('CLIENT_LOGO_ICON', {
    factory: () => ('/assets/icons/logo.svg'),
})

export const NAVIGATION_ITEMS: InjectionToken<MenuItem[]> = new InjectionToken<MenuItem[]>('NAVIGATION_ITEMS');

