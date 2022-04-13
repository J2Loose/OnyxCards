import LandingPage from './landingpage'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './dashboard'
import SignInPage from './Login'
import SignupPage from './Signup'
import PrivateRoute from './PrivateRoute'
import Passwordforget from './Passwordforget'
import Create from './Pages(P)/Create'
import Play from './Pages(P)/Play'
import Stats from './Pages(P)/Stats'
import Profile from './Pages(P)/Profile'
import ShowCards from './Pages(P)/CardCreation'
import PlayCards from './Pages(P)/PlayCards'



function App() {

  return (
    //routing including private routes
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute path='/dashboard' component={Dashboard} />     
          <Route path='/home' component={LandingPage} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/forgotten' component={Passwordforget} />
          <PrivateRoute path='/create' component={Create} />
          <PrivateRoute path='/play' component={Play} />
          <PrivateRoute path='/stats' component={Stats} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute exact path='/deck/:deckId' component={ShowCards}/>
          <PrivateRoute exact path='/use/:deckId' component={PlayCards}/>
          <LandingPage />  
        </Switch> 
      </AuthProvider>
    </Router>
  );
}

export default App;
