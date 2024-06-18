import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {

  @Input() inputTitle : string = '';

  counter: number = 0;

  ngOnInit(): void {
    if (
      typeof window !== 'undefined' &&
      typeof sessionStorage !== 'undefined'
    ) {
      const localCounter = localStorage.getItem('counter');
      this.counter = localCounter ? parseInt(localCounter) : 0;
    }
  }

  addCounter(): void {
    this.counter++;
    if (
      typeof window !== 'undefined' &&
      typeof localStorage !== 'undefined'
    ) {
      localStorage.setItem('counter', this.counter.toString());
    }
  }
}
