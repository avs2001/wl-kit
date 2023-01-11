import { ActiveRouteDirective } from 'src/app/directives/active-route.directive';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { MenuItem, RouterMenuItem } from 'src/app/utils/menu-item.utils';

@Component({
  selector: 'kbm-side-item',
  standalone: true,
  imports: [CommonModule, MatListModule, ActiveRouteDirective],
  templateUrl: './side-item.component.html',
  styleUrls: ['./side-item.component.scss']
})
export class SideItemComponent {
  @Input() navigationItems!: MenuItem[];
  @Input() open!: boolean;
  @Input() margin: number = 0;
  show: boolean = false;

  ngOnInit() {
    console.log(this.margin)
  }

  getMargin() {
    return { 'margin-left': this.margin }
  }

  getNavigationRoute(navigationItem: MenuItem) {
    let navigationRoute = (navigationItem as RouterMenuItem).navigationRoute
    return navigationRoute ? navigationRoute : 'no-navigation';
  }

  showItems(event: any) {
    event.stopPropagation();
    this.show = !this.show
  }

}
