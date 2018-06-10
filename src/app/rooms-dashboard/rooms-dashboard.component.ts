import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { Room } from '../room';

@Component({
  selector: 'app-rooms-dashboard',
  templateUrl: './rooms-dashboard.component.html',
  styleUrls: ['./rooms-dashboard.component.css']
})
export class RoomsDashboardComponent implements OnInit {
  allRooms: Room[];

  constructor(private _rs: RoomsService) {
  }

  ngOnInit() {
    this.getAllRooms();
  }

  getAllRooms() {
    this._rs.getAllRooms()
      .subscribe(rooms => this.allRooms = rooms);
  }

}
