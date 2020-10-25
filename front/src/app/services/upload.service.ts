import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadFile(formData) {

    this.http.post('https://localhost:8000/store-images', formData).subscribe((response) => console.log(response),
    (error) => console.log(error)
    )
  }
}
