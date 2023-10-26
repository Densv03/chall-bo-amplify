import React from 'react';
import { LoginForm } from './LoginForm';
import { LoginFormModel } from '../../models/components/Login/login-form.model';
import { AuthService } from '../../services/Auth/auth.service';
import { useNavigate } from 'react-router-dom';
import { LoginResponseModel } from '../../services/Auth/models/login-response.model';

export const Login = () => {
  const navigate = useNavigate();
  function loginUser(data: LoginFormModel): void {
    AuthService.logIn(data.login, data.password)
      .then((data: LoginResponseModel) => {
        // handling errors
        return data.data;
      })
      .then(() => {
        navigate('/users');
      });
  }

  return (
    <div className="login-wrapper">
      <h2 className="text-center">Log in into chall back office</h2>
      <div className="login-wrapper__login-form-wrapper">
        <LoginForm onSubmit={loginUser} />
      </div>
    </div>
  );
};
