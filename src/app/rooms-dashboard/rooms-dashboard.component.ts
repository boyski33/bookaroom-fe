import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { Room } from '../room';

@Component({
  selector: 'app-rooms-dashboard',
  templateUrl: './rooms-dashboard.component.html',
  styleUrls: ['./rooms-dashboard.component.css']
})
export class RoomsDashboardComponent implements OnInit {
  @Input() allRooms: Room[];

  constructor(private _rs: RoomsService) {
  }

  ngOnInit() {
    if (!this.allRooms) {
      this._getAllRooms();
    }
  }

  private _getAllRooms() {
    this._rs.getAllRooms()
      .subscribe(rooms => this.allRooms = rooms);
  }

}
