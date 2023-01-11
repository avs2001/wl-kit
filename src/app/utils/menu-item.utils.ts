import { Router } from "@angular/router";

export abstract class MenuItem {
    abstract txt: string;
    abstract icon: string;
    abstract matListItemExtraClass?: string[];
    abstract children: MenuItem[];
    abstract action(args?: any): void;
}

export class RouterMenuItem implements MenuItem {
    txt: string;
    icon: string;
    matListItemExtraClass: string[] = [];
    children: RouterMenuItem[] = [];

    navigationRoute: string;


    constructor(txt: string, icon: string, navigationRoute: string, private router: Router, children: RouterMenuItem[], matListItemExtraClass?: string[]) {
        this.txt = txt;
        this.icon = icon;
        this.navigationRoute = navigationRoute;
        this.children = children;
        if (matListItemExtraClass) {
            this.matListItemExtraClass = matListItemExtraClass;
        }
    }

    action(): void {
        this.router.navigateByUrl(this.navigationRoute);
    }
}

export class LogoutMenuItem implements MenuItem {
    txt: string;
    icon: string;
    matListItemExtraClass: string[] = [];
    children: RouterMenuItem[] = [];

    constructor(txt: string, icon: string, matListItemExtraClass?: string[]) {
        this.txt = txt;
        this.icon = icon;
        if (matListItemExtraClass) {
            this.matListItemExtraClass = matListItemExtraClass;
        }
    }

    action(): void {
        console.log('Inject auth service and logout')
    }
}