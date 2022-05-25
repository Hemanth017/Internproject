import { AbstractControl } from "@angular/forms";
  export function passwordpattern (control: AbstractControl): {[key:string]:any} |null
    {

    const pattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[$@$!%*?&])(?=.*?[^\s]).{8,}(?!\s)*$');

      const valid = pattern.test(control.value);

      return valid  ? null : { 'pattern': true };
    };
    

    export function blankspaces (control: AbstractControl): {[key:string]:any} |null
    {

    const nospace = new RegExp('^((?!\s{2,}).)*$');

      const blankspace = nospace.test(control.value);

      return blankspace  ? null : { 'blankspace': true };
    };
    