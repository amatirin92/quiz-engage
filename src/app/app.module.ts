import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ErrorsHandler} from './errors-handler';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [  {
    provide: ErrorHandler,
    useClass: ErrorsHandler,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
