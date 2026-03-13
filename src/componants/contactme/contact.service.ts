import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contacts'; //  backend URL

  constructor(private http: HttpClient) {}

  sendContactForm(data: ContactFormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
