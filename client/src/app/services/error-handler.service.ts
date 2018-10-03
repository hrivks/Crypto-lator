import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { InteractionService } from './interaction.service';

@Injectable()
export class ErrorHandlerService {

  constructor(private interactionService: InteractionService) { }

  /**
   * Get friendly error messag from error
   * @param err Error object
   */
  getErrorMessage(err) {
    if (err instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      return err.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,

      let errText = '';
      try {
        if (err.error instanceof Array) {
          errText = err.error.join('<br/>');
        } else {
          errText = err.error.toString();
        }
      } catch (ex) {
        errText = `code: ${err.status} | error: ${err.message}`;
      }

      return errText;
    }
  }

  /**
   * Handle error
   * @param contextMessage Message regardin the context where the error occured
   * @param err Error object
   * @param autoHide true, to autohide alert error popup
   */
  handleError(contextMessage: string, err, autoHide?: boolean) {
    console.error(contextMessage, err);
    const errMessage = this.getErrorMessage(err);
    const alertText = `${contextMessage} </br> <span> ${errMessage} </span>`;
    this.interactionService.showAlert(alertText, 'danger', autoHide);
    this.interactionService.showLoader(false);
  }

}
