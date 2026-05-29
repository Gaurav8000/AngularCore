import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../Interface/login';
import { AuthServiceService } from '../../Service/auth-service.service';
import { Router, RouterModule } from '@angular/router';

// Add these 5 imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    // Add these 5 here too
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login = { email: '', password: '' }  // ← capital O to match template
  hidePassword = true;                            // ← add this

  constructor(private ser: AuthServiceService, private router: Router) {}

  login() {
    this.ser.login(this.loginObj).subscribe({
      next: (res: any) => {
        localStorage.setItem("user", JSON.stringify(res));
        localStorage.setItem("role", res.role);
        console.log(res);
        if (res.role == "Admin") {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/task']);
        }
      },
      error: () => {
        alert("Invalid Email or Password");
      }
    });
  }
}