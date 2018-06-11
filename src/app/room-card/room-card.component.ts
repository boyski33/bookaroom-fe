import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomsService } from '../rooms.service';
import * as _ from 'lodash';
import * as $ from 'jquery';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {
  buttonText = 'Book';
  @Input() room: Room;

  constructor(private _rs: RoomsService) { }

  ngOnInit() {
    if (this.room.isBooked) {
      this.buttonText = 'Booked';
    }
  }

  bookRoom() {
    const tempRoom = _.cloneDeep(this.room);
    tempRoom.isBooked = true;

    this._rs.updateRoom(tempRoom)
      .subscribe(() => {
        this.room.isBooked = true;
        this.buttonText = 'Booked';
      });
  }

  cancelRoom() {
    const tempRoom = _.cloneDeep(this.room);
    tempRoom.isBooked = false;

    this._rs.updateRoom(tempRoom)
      .subscribe(() => {
        this.room.isBooked = false;
        this.buttonText = 'Book';
      });
  }
}
