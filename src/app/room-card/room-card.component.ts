import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {
  @Input() room: Room;

  constructor() { }

  ngOnInit() {
  }

}
