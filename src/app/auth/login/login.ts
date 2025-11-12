import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
    standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  showPassword = false;
  loading = false;
  errorMessage = '';

  constructor(private router: Router) {}

  async onSubmit(ev: Event) {
    ev.preventDefault();
    this.errorMessage = '';

    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = (formData.get('email') || '').toString().trim();
    const password = (formData.get('password') || '').toString();

    // Basic front-end validation
    if (!email) {
      this.errorMessage = 'Please enter your email.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }
    if (!password || password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters.';
      return;
    }

    // Simulate login (replace with real auth call)
    this.loading = true;
    try {
      await new Promise((r) => setTimeout(r, 1200)); // fake network
      // On success, navigate to home/shop/etc.
      this.router.navigate(['/']); // change destination as needed
    } catch (err) {
      this.errorMessage = 'Login failed. Try again.';
    } finally {
      this.loading = false;
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  // Optional: quick demo login
  quickDemo() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/']);
    }, 900);
  }
}
