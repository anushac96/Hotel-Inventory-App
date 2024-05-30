import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() rooms:RoomList[]=[];
  @Input() title:string='';

  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room: RoomList) {
    console.log('Hello');
    this.selectedRoom.emit(room);
  }
}
