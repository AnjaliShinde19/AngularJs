import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Custom validator function to check if two controls in a form group match.
 * @param controlName The name of the first control (e.g., 'password').
 * @param matchingControlName The name of the second control (e.g., 'confirmPassword').
 * @returns A ValidationErrors object if they don't match, otherwise null.
 */
export const matchPasswordValidator = (controlName: string, matchingControlName: string): ValidatorFn => {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    // Return if controls are null or if matching control has no value
    if (!control || !matchingControl || matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return null;
    }

    // Set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
    
    // Return null at the form group level as the error is set on the specific control
    return null;
  };
};