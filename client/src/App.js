import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from './Pages/Login';
import UserPage from './Pages/UserPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user-page">
          <UserPage />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
