import { BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
import Home from './Pages/Home/Home'

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={outerTheme}>  
        <div className="App">
          <Router>
            <Switch>
            <Route exact path="/member" component={Home} />
            <Route exact path="/" component={Home} />
            </Switch>
          </Router>
      </div>
    </ThemeProvider>

  );
}

export default App;
