import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as Notiflix from 'notiflix';

import { Alert, AlertType, AlertOptions } from '../_models';

@Injectable({ providedIn: 'root' })
export class AlertService {

    success(message: string, options?: AlertOptions) {
        Notiflix.Notify.success(message, {
            position: 'center-bottom'
        });
    }

    error(message: string, options?: AlertOptions) {
        Notiflix.Notify.failure(message, {
            position: 'center-bottom'
        });


    }

    info(message: string, options?: AlertOptions) {
        Notiflix.Notify.info(message, {
            position: 'center-bottom'
        });
    }

    warn(message: string, options?: AlertOptions) {
        Notiflix.Notify.warning(message, {
            position: 'center-bottom'
        });
    }


}