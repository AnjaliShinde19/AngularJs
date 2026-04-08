import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn(): boolean {
    // Replace with actual logic (e.g., check localStorage)
    return !!localStorage.getItem('token');
  }
}
