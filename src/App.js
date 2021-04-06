import Navbar from './Navbar';
import './App.css';
import Body from './Body';
import SignIn from './SignIn';
import Register from './Register';
import SignInhospital from './SignIn__hospital';
import Registerhospital from './Register__hospital';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Slot from './Slot';
import Appoinments from './Appoinments';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
        <Body />  
      </Route>
      <Route exact path="/signIn">
          <SignIn /> 
      </Route>
      <Route exact path="/register">
          <Register /> 
      </Route>
      <Route exact path="/signInHospital">
          <SignInhospital /> 
      </Route>
      <Route exact path="/registerHospital">
          <Registerhospital /> 
      </Route>
      <Route exact path="/slot">
          <Slot /> 
      </Route>
      <Route exact path="/appoinments">
          <Appoinments /> 
      </Route>
      </Switch>
      {/* footer */}
    </div>
    </Router>
  );
}

export default App;
