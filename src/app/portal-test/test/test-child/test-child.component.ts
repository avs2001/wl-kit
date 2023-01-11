import { Component } from '@angular/core';
import { HeaderDirective } from 'src/app/components/layout/header/header.directive';

@Component({
  selector: 'kbm-test-child',
  standalone: true,
  imports: [HeaderDirective],
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent {

}
