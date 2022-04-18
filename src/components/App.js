import LandingPage from './landingpage'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Register from './Register'
import SignIn from './Signin'
import ForgotPassword from './ForgetPassword'
import TestDash from './TestDash'
import TestCreate from './TestCreate'
import TestShowCards from './TestCreate/TestCardCreate'
import TestPlay from './TestPlay'
import TestPlayCards from './TestPlay/PlayCards'
import Profile from './TestProfile'


function App() {

  return (
    <Router>
      {/* AuthProvider is used to allow firebase's auth functions to be used throughout my project */}
      <AuthProvider>
        <Switch>
          {/* Routing for the user's dashboard. Only accessible if the user is authenticated */}
          <PrivateRoute path='/dashboard' component={TestDash} /> 
          {/* Routing for pathways that are available without authentication */}
          <Route path='/home' component={LandingPage} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={Register} />
          <Route path='/forgotten' component={ForgotPassword} />
          {/* Routing for the card creation page. Only accessible if the user is authenticated */}
          <PrivateRoute path='/create' component={TestCreate} />
          {/* Routing for the page where the user uses their created cards. Only accessible if the user is authenticated */}
          <PrivateRoute path='/play' component={TestPlay} />
          {/* Routing for the user's profile. Only accessible if the user is authenticated */}
          <PrivateRoute path='/profile' component={Profile} />
          {/* Routing for a specific deck that the user has created. Accessed by selecting a deck on the deck creation page. Path is specfic to that deck as it has the deck's ID. Only accessible if the user is authenticated */}
          <PrivateRoute exact path='/deck/:deckId' component={TestShowCards}/>
          {/* Routing for a specific deck that the user has created. Accessed by selecting a deck on the "play" page. Path is specfic to that deck as it has the deck's ID. Only accessible if the user is authenticated */}
          <PrivateRoute exact path='/use/:deckId' component={TestPlayCards}/>
          {/* The page that each user is greeted with when first visiting the site*/}
          <LandingPage />  
        </Switch> 
      </AuthProvider>
    </Router>
  );
}

export default App;
