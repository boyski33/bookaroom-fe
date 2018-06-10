import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomsService } from '../rooms.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {
  @Input() room: Room;

  constructor(private _rs: RoomsService) { }

  ngOnInit() {
  }

  bookRoom() {
    const tempRoom = _.cloneDeep(this.room);
    tempRoom.isBooked = true;

    this._rs.updateRoom(tempRoom)
      .subscribe(() => this.room.isBooked = true);
  }
}
