import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login/Login';
import { Registration } from '../components/Registration';
import { AuthService } from '../services/Auth/auth.service';
import { NotFound } from '../components/NotFound';
import { UserList } from '../components/Users/UserList';
import { UserDetails } from '../components/Users/UserDetails';
import { Main } from '../components/core/Main';
import { CreateOrganizationList } from '../components/Organizations/CreateOrganizationList';
import { DeleteOrganizationList } from '../components/Organizations/DeleteOrganizationList';
import { CreateOrganizationDetails } from '../components/Organizations/CreateOrganizationDetails';
import { DeleteOrganizationDetails } from '../components/Organizations/DeleteOrganizationDetails';
import { ReportList } from '../components/Reports/ReportList';
import { RouteAction } from '../models/route-action.model';
import { RedirectAction } from '../models/redirect-action.model';
import { AppActionType } from '../enums/app-action-type.enum';
import { OrganizationList } from '../components/Organizations/OrganizationList';

type AppAction = RedirectAction | RouteAction;

export const AppRouter = () => {
  const NOT_AUTHED_USER_ROUTES: AppAction[] = [
    {
      type: AppActionType.REDIRECT,
      path: '/',
      to: '/login',
    },
    {
      type: AppActionType.ROUTE,
      path: '/login',
      element: <Login />,
    },
    {
      type: AppActionType.ROUTE,
      path: '/register',
      element: <Registration />,
    },
    {
      type: AppActionType.ROUTE,
      path: '/not-found',
      element: <NotFound />,
    },
    {
      type: AppActionType.REDIRECT,
      path: '*',
      to: '/register',
    },
  ];

  const AUTHED_USER_ROUTES: AppAction[] = [
    {
      type: AppActionType.REDIRECT,
      path: '/',
      to: '/users',
    },
    {
      type: AppActionType.REDIRECT,
      path: '*',
      to: '/not-found',
    },
    {
      type: AppActionType.ROUTE,
      path: '/login',
      element: <Login />,
    },
    {
      type: AppActionType.ROUTE,
      path: '/register',
      element: <Registration />,
    },
    {
      type: AppActionType.ROUTE,
      path: '/not-found',
      element: <NotFound />,
    },
    {
      type: AppActionType.REDIRECT,
      path: '/users',
      to: '/users/list',
    },
    {
      type: AppActionType.ROUTE,
      index: true,
      path: 'users/*',
      element: <Main />,
      children: [
        {
          path: 'list',
          element: <UserList />,
        },
        {
          path: ':id',
          element: <UserDetails />,
        },
      ],
    },
    {
      type: AppActionType.ROUTE,
      path: 'organizations/*',
      element: <Main />,
      children: [
        {
          path: '',
          element: <OrganizationList />,
        },
        // {
        //   path: 'create',
        //   element: <CreateOrganizationList />,
        // },
        // {
        //   path: 'delete',
        //   element: <DeleteOrganizationList />,
        // },
        {
          path: 'create/:id',
          element: <CreateOrganizationDetails />,
        },
        {
          path: 'delete/:id',
          element: <DeleteOrganizationDetails />,
        },
      ],
    },
    {
      type: AppActionType.ROUTE,
      path: 'reports/*',
      element: <Main />,
      children: [
        {
          path: '',
          element: <ReportList />,
        },
      ],
    },
  ];

  function renderRoutes(routes: AppAction[]): React.ReactElement {
    return (
      <Routes>
        {routes.map((action, index) => {
          if (action.type === AppActionType.ROUTE) {
            const { path, element, children } = action;
            return (
              <Route key={index} path={path} element={element}>
                {children &&
                  children.map((childAction, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childAction.path}
                      element={childAction.element}
                    />
                  ))}
              </Route>
            );
          } else if (action.type === AppActionType.REDIRECT) {
            const { path, to } = action;
            return (
              <Route path={path} element={<Navigate to={to} />} key={path} />
            );
          }
          return null;
        })}
      </Routes>
    );
  }

  return (
    <div id="router-wrapper">
      {AuthService.isAuth()
        ? renderRoutes(AUTHED_USER_ROUTES)
        : renderRoutes(NOT_AUTHED_USER_ROUTES)}
    </div>
  );
};
