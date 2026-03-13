import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService, ContactFormData } from './contact.service';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent {

  contactForm: FormGroup;

  submitting = false;
  succeeded = false;

   private formspreeUrl = `https://formspree.io/f/${environment.FORMSPREE_FORM_ID}`;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;

    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    this.http.post(
      this.formspreeUrl,
      this.contactForm.value,
      { headers }
    ).subscribe({

      next: () => {
        this.succeeded = true;
        this.submitting = false;
        this.contactForm.reset();
      },

      error: () => {
        this.submitting = false;
        alert("Something went wrong. Please try again.");
      }

    });
  }

  // onSubmit() {
  //   if (this.contactForm.invalid) {
  //     this.contactForm.markAllAsTouched();
  //     return;
  //   };

  //   this.submitting = true;

  //   const formData: ContactFormData = this.contactForm.value;

  //   // Simulate API call
  //   this.contactService.sendContactForm(formData).subscribe({
  //     next: (res) => {
  //       console.log('Response:', res);
  //       this.succeeded = true;
  //       this.contactForm.reset();
  //       this.submitting = false;
  //     },
  //     error: (err) => {
  //       console.error('Error:', err);
  //       this.submitting = false;
  //     }
  //   });
  // }

  
}

