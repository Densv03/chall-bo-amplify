import { AppActionType } from '../enums/app-action-type.enum';

export interface RedirectAction {
  type: AppActionType.REDIRECT;
  path: string;
  to: string;
}
