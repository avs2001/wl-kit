import { Component } from '@angular/core';
import { HeaderDirective } from 'src/app/components/layout/header/header.directive';

@Component({
  selector: 'kbm-test',
  standalone: true,
  imports: [HeaderDirective],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

}
