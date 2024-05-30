import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RoomsComponent,CommonModule]
})
export class AppComponent {
  title = 'hotel-inventory-app';
  role='admin';
}
