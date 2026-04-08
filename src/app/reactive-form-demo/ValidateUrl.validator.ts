import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ValidateUrl(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
        return null; // return null if value is empty/optional
    }

    if (!control.value.startsWith('https') || !control.value.includes('.io')) {
        return { invalidUrl: true }; // return error object if validation fails
    }

    return null; // return null if valid
}