import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {
  @Input() inputTitle: string = '';

  // @Output() counterEmiter : EventEmitter<number> = new EventEmitter();
  @Output() counterEmiter = new EventEmitter();

  counter: number = 0;

  ngOnInit(): void {
    if (
      typeof window !== 'undefined' &&
      typeof sessionStorage !== 'undefined'
    ) {
      const sessionCounter = sessionStorage.getItem('counter');
      this.counter = sessionCounter ? parseInt(sessionCounter) : 0;
    }
  }

  addCounter(): void {
    this.counter++;
    if (
      typeof window !== 'undefined' &&
      typeof sessionStorage !== 'undefined'
    ) {
      sessionStorage.setItem('counter', this.counter.toString());
      this.counterEmiter.emit(this.counter);
    }
  }
}
