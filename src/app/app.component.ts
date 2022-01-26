import { Component, ChangeDetectorRef } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { FormBuilder } from '@angular/forms';
import { APIService, CreateQuestionInput, Question } from "./API.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'amplify-app';
  form = this.formBuilder.group({
    name: '',
    ans1: '',
    ans2: ''
  });
  questions: Question[] = [];

  user: CognitoUserInterface | undefined;
  authState: AuthState | undefined;

  constructor(private formBuilder: FormBuilder, private api: APIService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })

    this.api.ListQuestions()
      .then((event) => {
        this.questions = event.items as Question[];
      })
      .catch((e) => {
        console.log("error ListQuestions ...", e);
      });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

  onSubmit() {
    this.form.value.name

    this.api
      .CreateQuestion(this.form.value)
      .then((event) => {
        console.log("item created!");
        this.form.reset();
        this.api.ListQuestions()
          .then((event) => {
            this.questions = event.items as Question[];
          })
          .catch((e) => {
            console.log("error ListQuestions ...", e);
          });
      })
      .catch((e) => {
        console.log("error creating ...", e);
      });
  }
}
