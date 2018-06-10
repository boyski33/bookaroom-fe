import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { Room } from '../room';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  styleUrls: ['./booked-rooms.component.css']
})
export class BookedRoomsComponent implements OnInit {
  bookedRooms: Room[] = [];

  constructor(private _rs: RoomsService) { }

  ngOnInit() {
    this._getBookedRooms();
  }

  private _getBookedRooms() {
    this._rs.getBookedRooms()
      .subscribe(rooms => this.bookedRooms = rooms);
  }

}
