import React from 'react';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import './App.scss';

Amplify.configure(awsmobile);

function App({signOut, user}: any) {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    )
  // return (
  //     <div>
  //       <Heading level={1}>Hello {user.username}</Heading>
  //       <Button onClick={signOut}>Sign out</Button>
  //       <h2>Amplify Todos</h2>
  //     </div>
  // );
}

export default withAuthenticator(App);
