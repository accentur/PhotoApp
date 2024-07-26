import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { pluck } from 'rxjs/operators';


interface UnsplashResponse{

  urls: {
    regular: string;
  }
}


@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {

  constructor(private client: HttpClient) { }

  getPhoto() {
    
    return this.client.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      
      headers: {
        
        Authorization:'Client-ID Awxm3n2GJMIWq6LeRV_2evjycnk7zXnA9DIk8CySLZQ'
      }
      
    });
  }
  


}
