import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['chris', 'anna'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userdata': new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender' : new FormControl('female'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signupForm)
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s:string]: boolean } {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

}
