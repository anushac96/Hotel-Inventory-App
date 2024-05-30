import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { title } from 'process';

@Component({
    selector: 'hinv-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.css',
    imports: [CommonModule, RoomsListComponent]
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';
  
  numberOfRooms=10;

  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  rooms : Room={
    totalRooms:20,
    availableRooms:15,
    bookedRooms:5,
  };

  roomList : RoomList[]= [];

  title='Room List';

  ngOnInit(): void {
    this.roomList=[ 
      {
        roomNumber:1,
        roomType: 'Deluxe Room1',
        amenities: 'AC, WiFi, Kitchen, Bathroom',
        price: 500,
        photo: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
        checkInTime: new Date('01-Feb-2024'),
        checkoutTime: new Date('01-Mar-2024')
      },
      {
        roomNumber:2,
        roomType: 'Deluxe Room2',
        amenities: 'AC, WiFi, Kitchen, Bathroom',
        price: 600,
        photo: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
        checkInTime: new Date('02-Feb-2024'),
        checkoutTime: new Date('02-Mar-2024')
      },{
        roomNumber:3,
        roomType: 'Deluxe Room3',
        amenities: 'AC, WiFi, Kitchen, Bathroom',
        price: 700,
        photo: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
        checkInTime: new Date('03-Feb-2024'),
        checkoutTime: new Date('03-Mar-2024')
      },{
        roomNumber:4,
        roomType: 'Deluxe Room4',
        amenities: 'AC, WiFi, Kitchen, Bathroom',
        price: 800,
        photo: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
        checkInTime: new Date('01-Feb-2024'),
        checkoutTime: new Date('01-Mar-2024')
      },
      {
        roomNumber:5,
        roomType: 'Deluxe Room5',
        amenities: 'AC, WiFi, Kitchen, Bathroom',
        price: 900,
        photo: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
        checkInTime: new Date('02-Feb-2024'),
        checkoutTime: new Date('02-Mar-2024')
      },{
        roomNumber:6,
        roomType: 'Deluxe Room6',
        amenities: 'AC, WiFi, Kitchen, Bathroom',
        price: 1000,
        photo: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
        checkInTime: new Date('03-Feb-2024'),
        checkoutTime: new Date('03-Mar-2024')
      }
    ];
    }
  
  selectedRoomVar! : RoomList;

  selectRoomParent(room : RoomList) {
    console.log(room);
    this.selectedRoomVar = room;
  }

  addroom() {
    const room:RoomList={
      roomNumber: 7,
      roomType: 'Deluxe Room1',
      amenities: 'AC, WiFi, Kitchen, Bathroom',
      price: 900,
      photo: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
      checkInTime: new Date('01-Feb-2024'),
      checkoutTime: new Date('01-Mar-2024')  
    };
    console.log(this.roomList);
    //this.roomList.push(room);
    this.roomList = [...this.roomList,room];

    
  }
}
