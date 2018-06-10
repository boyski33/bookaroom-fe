import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { RoomsDashboardComponent } from './rooms-dashboard/rooms-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomsService } from './rooms.service';
import { NewRoomFormComponent } from './new-room-form/new-room-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookedRoomsComponent } from './booked-rooms/booked-rooms.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'rooms', component: RoomsDashboardComponent },
  { path: 'booked', component: BookedRoomsComponent },
  { path: 'new', component: NewRoomFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RoomCardComponent,
    RoomsDashboardComponent,
    HomePageComponent,
    NotFoundComponent,
    NavbarComponent,
    NewRoomFormComponent,
    BookedRoomsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
