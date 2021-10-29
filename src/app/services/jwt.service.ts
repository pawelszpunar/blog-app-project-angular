import { Injectable, NgModule } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@NgModule()
export class JwtService {

  constructor() { }

  public jwtHelperService: JwtHelperService = new JwtHelperService();

  decodeToken(token: string) {
    return this.jwtHelperService.decodeToken(token);
  }

}
