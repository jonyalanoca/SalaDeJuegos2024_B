import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmarClaveValidator():ValidatorFn {
    return (FormGroup: AbstractControl): ValidationErrors | null => {
        const clave = FormGroup.get('password');
        const repiteClave = FormGroup.get('confirmPassword');

        if(!clave || !repiteClave) return null;

        const currentError = repiteClave.errors;

        const respuestaError = {  };

        if (clave?.value !== repiteClave?.value) {
            FormGroup.get('confirmPassword')?.setErrors({
                ...currentError,
                noCoincide: 'Las claves no coinciden'
            });
        }
        else {
            if(currentError){
                delete currentError['noCoincide'];

                if (Object.keys(currentError).length === 0) {
                    repiteClave.setErrors(null);
                  } else {
                    repiteClave.setErrors(currentError);
                  }
            }
        }
        return null;
    };
}