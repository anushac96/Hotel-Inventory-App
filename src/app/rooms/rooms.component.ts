import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  


  hotelName = 'Hilton Hotel';
  
  numberOfRooms=10;

  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  rooms : Room={
    totalRooms:20,
    availableRooms:15,
    bookedRooms:5,
  };

  roomList : RoomList[]= [];


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
    ]
    }
  
}
