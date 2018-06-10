import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from './room';

const backendUrl = 'http://localhost:3000';

@Injectable()
export class RoomsService {

  constructor(private _http: HttpClient) {
  }

  getAllRooms() {
    const url = `${backendUrl}/`

    return this._http.get<Room[]>(url);
  }

  postNewRoom(room: Room) {
    const url = `${backendUrl}/room`;

    return this._http.post<Room>(url, room);
  }
}
