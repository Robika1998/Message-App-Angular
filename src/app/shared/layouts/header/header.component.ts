import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { TokenService } from '../../../core/services/token.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAuthenticate$!: Observable<boolean>;
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {
    this.isAuthenticate$ = this.tokenService.isAuthentication;
  }

  logout() {
    this.authService.logout().subscribe({
      next() {},
    });
  }
}
