import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { Question, Answer } from './models/models';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiQuizService {
  public runningScore = 0;
  public newQuestion: Question;
  public isGenericError: boolean;
  public answers: Array<Answer>;
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  public getQuestion(levelOfEase: number): Observable<Question> {
    return this.http.get(this.apiUrl + `/getRandomQuestion`).pipe(
      switchMap(question => {
        return this.http
          .get(this.apiUrl + `/getAnswers?cat=${question['category']}`)
          .pipe(
            map(answers => {
             this.newQuestion = question as Question;
             this.newQuestion.answers = answers as Question['answers'];
             this.newQuestion.answers.filter(answer => answer.id !== this.newQuestion.answerId);
             this.newQuestion.answers.length = levelOfEase;
            return this.newQuestion;
            })
          );
      })
    );
  }
}
