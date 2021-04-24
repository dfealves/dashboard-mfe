import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuthentication: boolean;

  constructor(
    private http: HttpClient
  ) { }


  checkUserIsAuthenticated(): boolean {
    const sessionStorageUser = sessionStorage.getItem('authUser');

    if (sessionStorageUser) {
      this.userAuthentication = true;
    } else {
      this.userAuthentication = false;
    }
    return this.userAuthentication;
  }

  // gerenciar permissões
  checkUserPermissions(permissionRequired: string): boolean {
    const sessionStorageUser = sessionStorage.getItem('authUser');
    const authUser = sessionStorageUser ? JSON.parse(sessionStorageUser) : '';
    const permissionUser = authUser.user?.permissions.find(
      (element) => {
        return element === permissionRequired
      }
    );
    return permissionUser ? true : false;
  }
}
