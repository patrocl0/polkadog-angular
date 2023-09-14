import { Component } from '@angular/core';
import { UserService } from '../../../../../../polkadog-backend/src/user/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['../login-page/login-page.component.scss'],
})
export class RegisterPageComponent {
  constructor(
    private readonly userService: UserService,
    private fb: FormGroup
  ) {}

  registerUser() {}
}
