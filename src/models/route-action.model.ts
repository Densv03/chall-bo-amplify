import React from 'react';
import { AppActionType } from '../enums/app-action-type.enum';
import { RouteConfig } from './route-config.model';

export interface RouteAction {
  type: AppActionType.ROUTE;
  path: string;
  index?: true;
  element: React.ReactElement;
  children?: RouteConfig[];
}
