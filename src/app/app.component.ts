import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hola desde el componente padre';
  users = ['user1', 'user2', 'user3', 'user4', 'user5'];
  // users = [];
  // users? : string[]; //  Se le dice al compilador que ya se que no esta inicializada
  visible: boolean = true;
  // users!: string[]; // Se le dice al compilador que esta variable es opcional

  counter: number = 0;

  setVisible(): void {
    this.visible = !this.visible;
  }

  setCounterListener(counter: number): void {
    this.counter = counter;
  }
}
