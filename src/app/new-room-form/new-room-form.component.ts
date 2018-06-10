import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoomsService } from '../rooms.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-new-room-form',
  templateUrl: './new-room-form.component.html',
  styleUrls: ['./new-room-form.component.css']
})
export class NewRoomFormComponent implements OnInit {
  newRoomForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _rs: RoomsService,
              private _router: Router) {
  }

  ngOnInit() {
    this._buildForm();
  }

  submitForm() {
    const room = this.newRoomForm.getRawValue();
    this._rs.postNewRoom(room)
      .subscribe(
        () => this._router.navigate(['/rooms']),
        () => $('#failure').css('visibility', 'visible'),
        () => {}
      );
  }

  private _buildForm() {
    this.newRoomForm = this._fb.group({
      name: '',
      location: '',
      capacity: ''
    });
  }
}
