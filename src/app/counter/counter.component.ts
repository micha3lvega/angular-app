import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  ngOnInit(): void {
    if (
      typeof window !== 'undefined' &&
      typeof sessionStorage !== 'undefined'
    ) {
      const storedCounter = sessionStorage.getItem('counter');
      this.counter = storedCounter ? parseInt(storedCounter) : 0;
    }
  }

  addCounter(): void {
    this.counter++;
    if (
      typeof window !== 'undefined' &&
      typeof sessionStorage !== 'undefined'
    ) {
      sessionStorage.setItem('counter', this.counter.toString());
    }
  }
}
