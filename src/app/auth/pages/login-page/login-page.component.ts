import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  faCoffee = faCoffee;
}
