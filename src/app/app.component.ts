import {Component} from '@angular/core';

@Component({
  selector: 'kbm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wl-kit';

  sort($event: any) {
    console.log($event)
  }
}
