import { useCustomState } from '../../hooks/useCustomState.hook';
import { ChallInput } from '../UI/ChallInput';
import { ChallInputThemeEnum } from '../../enums/UI/chall-input-theme.enum';
import { ChallButton } from '../UI/ChallButton';
import { ChallButtonThemeEnum } from '../../enums/UI/chall-button-theme.enum';
import '../../styles/components/Login/LoginForm.module.scss';
import { LoginFormModel } from '../../models/components/Login/login-form.model';
import { LoginFormProps } from '../../models/components/Login/login-form-props';

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [loginFormState, setLoginFormState] = useCustomState<LoginFormModel>({
    login: '',
    password: '',
  });

  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    onSubmit(loginFormState);
  }

  function updateLoginForm<T extends keyof LoginFormModel>(
    field: T,
    value: string
  ): void {
    setLoginFormState({ ...loginFormState, [field]: value });
  }

  return (
    <div className={'login-form-container'}>
      <form onSubmit={submitForm} className="login-form">
        <div className="d-flex justify-content-between w-100 mb-2">
          <p>Login</p>
          <ChallInput
            type="text"
            theme={ChallInputThemeEnum.BACKGROUND_WHITE}
            placeholder="Enter your login"
            onChange={(e) => updateLoginForm('login', e.target.value)}
            required={true}
            className="w-75"
          />
        </div>
        <div className="d-flex justify-content-between w-100 mb-3">
          <p>Password</p>
          <ChallInput
            type="password"
            theme={ChallInputThemeEnum.BACKGROUND_WHITE}
            placeholder="Enter your password"
            onChange={(e) => updateLoginForm('password', e.target.value)}
            required={true}
            className="w-75"
          />
        </div>
        <ChallButton buttonTheme={ChallButtonThemeEnum.LIGHT_GRAY}>
          Log in
        </ChallButton>
      </form>
    </div>
  );
};
