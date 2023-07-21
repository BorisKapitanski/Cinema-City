import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(){}

submitHandler(form: NgForm): void {

  

  if (form.invalid) {
    return;
  }

  const { username, email, age, password , repeatPassword } = form.value;
  console.log(form.value);

}
}
