import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male'
        
    // });
    this.signupForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    });
  }
  defaultQuestion = "teacher";
  answer = '';
  genders = ['male', 'female'];

  // onSubmit(form: NgForm){
  //   console.log('submitted');
  //   console.log(form);
  // }
  onSubmit(){
    console.log(this.signupForm);
  }
}
