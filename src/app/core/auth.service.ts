import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    //登录验证
    loginWithCredentials(username: string, password: string): boolean {
        if (username === "admin") {
            return true;
        } else {
            return false;
        }
    }
}

