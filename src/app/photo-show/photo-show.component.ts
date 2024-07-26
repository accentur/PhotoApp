import { Component } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent {


  fetchPhoto() {
  
 this.getPhoto();
}


  photoUrl: string='';

  constructor(private service: FetchPhotoService) {

    this.getPhoto();
    
  }


  getPhoto() {
    
    this.service.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;

    });

  }
  
}
