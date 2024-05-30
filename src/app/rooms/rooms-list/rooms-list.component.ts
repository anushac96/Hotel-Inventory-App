import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../room';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent {
  @Input() rooms:RoomList[]=[];

  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room: RoomList) {
    console.log('Hello');
    this.selectedRoom.emit(room);
  }
}
