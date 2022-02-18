import { FormControl } from '@angular/forms';

export const hasRequiredField = (ctrl:FormControl): boolean => {
  const { validator } = ctrl;
  if (validator) {
    const validation = validator(new FormControl())
    return validation !== null && validation.required === true
  }
  return false
}
