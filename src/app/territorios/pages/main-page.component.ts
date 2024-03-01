import { Component } from '@angular/core';
import { TerritoriosService } from '../services/territorios.service';

@Component({
    selector: 'app-territorios-main-page',
    templateUrl: 'main-page.component.html'
})

export class TerritoriosMainPageComponent {
  constructor( public territoriosService: TerritoriosService) {}
}
