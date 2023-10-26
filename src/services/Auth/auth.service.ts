import axios from 'axios';
import { LoginResponseModel } from './models/login-response.model';

export class AuthService {
  public static isAuth(): boolean {
    return true
  }

  public static async logIn(
    username: string,
    password: string
  ): Promise<LoginResponseModel> {
    return axios
      .post('http://localhost:3000/auth/login', {
        username,
        password,
      })
      .then((response: LoginResponseModel) => {
        localStorage.setItem('token', response.data.access_token);
        return response;
      });
  }

  public static logout(): void {
    localStorage.removeItem('token');
  }
}
