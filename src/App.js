import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from "./components/Topbar/Topbar";
import Home from './pages/Home/Home';
import UserList from './pages/UsersList/UserList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/userId/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
