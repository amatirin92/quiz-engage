import { Component, OnInit } from '@angular/core';
import { ApiQuizService } from '../api-quiz.service';
import { HttpClient } from '@angular/common/http';
import { Question, Answer } from '../models/models';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public newQuestion: Question;
  public runningScore: number;
  public isLoading = true;
  public isError;
  public levelOfEase;

  constructor(protected apiService: ApiQuizService, private http: HttpClient) {}

  ngOnInit() {
    this.runningScore = this.apiService.runningScore;
  }

  public isCorrectAnswer(answer: Answer, levelOfEase: number) {
    this.isLoading = true;
    if (this.newQuestion.answerId === answer.id) {
      this.isError = false;
      this.runningScore++;
    } else if (this.newQuestion.answerId !== answer.id) {
      this.isError = true;
    }

    setTimeout(() => {
      this.getQuestion(this.levelOfEase);
    }, 300);
  }

  public getQuestion(levelOfEase: number) {
    this.isLoading = true;
    this.levelOfEase = levelOfEase;
    this.apiService.getQuestion(this.levelOfEase).subscribe(response => {
      this.newQuestion = response;
      this.isLoading = false;
    });
  }
}
