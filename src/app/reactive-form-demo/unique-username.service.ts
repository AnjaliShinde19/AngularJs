import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer, map, switchMap, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUsernameService {

    constructor(private http: HttpClient) { } // Use HttpClient for real API calls

    // A function that returns the actual validator function
    uniqueUsernameValidator(): AsyncValidatorFn 
    {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            // Simulate an API call with a delay and check for specific usernames
            return timer(500).pipe(
                switchMap(() => this.checkUsernameExists(control.value)),
                map(exists => (exists ? { usernameExists: true } : null)),
                catchError(() => of(null)) // Handle API errors gracefully
            );
        };
    }

    // Mock function to check username existence (replace with actual API call)
    private checkUsernameExists(username: string): Observable<boolean> {
        const existingUsernames = ['admin', 'superuser'];
        return of(existingUsernames.includes(username));
    }
}