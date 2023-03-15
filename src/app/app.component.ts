import {Component, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";

export function users$() {
  return inject(HttpClient).get<any[]>('https://jsonplaceholder.typicode.com/users')
}

@Component({
  selector: 'kbm-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users$ = users$();
}
