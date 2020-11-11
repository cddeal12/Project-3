import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from './Pages/Login';
import UserPage from './Pages/UserPage';
import MeetUps from './Pages/MeetUps';
import NewMeetUp from './Pages/NewMeetUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user-page">
          <UserPage />
        </Route>
        <Route path="/meet-ups">
          <MeetUps />
        </Route>
        <Route path="/new-meet-up">
          <NewMeetUp />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
