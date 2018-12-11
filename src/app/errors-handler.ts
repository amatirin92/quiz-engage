import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiQuizService } from './api-quiz.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  isGenericError = false;
  constructor(private injector: Injector) {}

  public handleError(error: Error) {
     // Do whatever you like with the error (send it to the server?)
     // And log it to the console
     const apiService = this.injector.get(ApiQuizService);

     if (error instanceof HttpErrorResponse) {
       apiService.isGenericError = true;
       throw Error;
     }
     throw Error;
  }

}
