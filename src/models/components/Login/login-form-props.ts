import { LoginFormModel } from './login-form.model';

export interface LoginFormProps {
  onSubmit: (data: LoginFormModel) => void;
}
