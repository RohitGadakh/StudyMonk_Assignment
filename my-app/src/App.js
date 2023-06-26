import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import HomePage from './component/HomePage/HomePage';
import LoginPage from './component/LoginPage/LoginPage';
import AddUser from './component/AddUser/AddUser';
import { BrowserRouter as Router , Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
       {/* <NavBar></NavBar> */}
      <Router>
        <Switch>
        {/* <Route path="/" exact element={<HomePage/>} /> */}
        <Route path="/" exact render={() => <HomePage />} />
        <Route exact path='/login' render = {() => <LoginPage/>} />
        <Route exact path='/add/user' render = {() => <AddUser/>} />
          {/* <Route></Route>
          <Route></Route> */}
        </Switch>
      </Router>
       {/* <LoginPage></LoginPage> */}
       {/* <AddUser></AddUser> */}
    </div>
  );
}

export default App;
