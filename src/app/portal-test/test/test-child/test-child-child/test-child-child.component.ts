import { Component } from '@angular/core';
import { HeaderDirective } from 'src/app/components/layout/header/header.directive';

@Component({
  selector: 'kbm-test-child-child',
  standalone: true,
  imports: [HeaderDirective],
  templateUrl: './test-child-child.component.html',
  styleUrls: ['./test-child-child.component.scss']
})
export class TestChildChildComponent {

}
