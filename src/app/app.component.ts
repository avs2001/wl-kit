import {Component, inject, OnInit, Signal, signal} from '@angular/core';
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
export class AppComponent implements OnInit{
  users$ = users$();
  messages: Signal<string[]> = signal([]);

  ngOnInit(): void {
    // this.messages.subscribe(messages => {
    //   this.messages = messages;
    // });
  }


}
