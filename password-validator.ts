import { AbstractControl, FormControl } from "@angular/forms";
  export function passwordpattern (control: AbstractControl): {[key:string]:any} |null
    {

    const pattern = new RegExp('^(?!=.*?[\s])+(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[$@$!%*?&]).{8,}(?!\s)*$');

      const valid = pattern.test(control.value);

      return valid  ? null : { 'pattern': true };
    };
    

  
    