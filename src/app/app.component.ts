import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
  lat: number = 51.678418;
  lng: number = 7.809007;
  ishidden: boolean = true;

  switch(){
  this.ishidden = !this.ishidden;
  }
}


