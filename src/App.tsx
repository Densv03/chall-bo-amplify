import React, { useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import './App.scss';
import { UserActionTypes } from "./store/types/user";
import { useDispatch } from "react-redux";

Amplify.configure(awsmobile);

function App({signOut, user}: any) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: UserActionTypes.UPDATE_USER, payload: user});
    }, [])
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
