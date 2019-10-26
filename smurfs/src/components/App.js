import React from "react";
import {Route} from 'react-router-dom';
import {useSmurfActions} from '../actions/useSmurfActions';
import SmurfContainer from '../smurfContainer/smurfContainer'
import {ActionsProvider} from '../contexts/ActionsContext';
import "./App.css";
const App =() => {
  const actions = useSmurfActions();

    return (
      <ActionsProvider value={{actions}}>
        <Route exact path='/'component={SmurfContainer}  />
      </ActionsProvider>
    );
  
}

export default App;
