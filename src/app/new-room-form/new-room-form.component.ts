import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  errorMessage: string;

  constructor(private _fb: FormBuilder,
              private _rs: RoomsService,
              private _router: Router) {
  }

  ngOnInit() {
    this._buildForm();
  }

  submitForm() {
    if (!this.newRoomForm.valid) {
      Object.keys(this.newRoomForm.controls).forEach(field => {
        console.log(this.newRoomForm.get(field));
        this.newRoomForm.get(field).markAsDirty({ onlySelf: true });
      });

      return;
    }

    const room = this.newRoomForm.getRawValue();

    this._rs.postNewRoom(room)
      .subscribe(
        () => this._router.navigate(['/rooms']),
        err => {
          this.errorMessage = err.error;
          $('#failure').css('visibility', 'visible');
        },
        () => {
        }
      );
  }

  private _buildForm() {
    this.newRoomForm = this._fb.group({
      name: ['', Validators.required],
      location: '',
      capacity: ''
    });
  }
}
