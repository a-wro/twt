import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Tweets from './containers/tweets';
import NavBar from './containers/navbar';
import LoginPage from './containers/loginpage';

class App extends React.Component {
    render() {
        return (
        <Router>
            <div> 
                <NavBar />   
                <Switch>
                    <Route path="/tweets" component={Tweets} />
                    <Route path="/login" component={LoginPage} />
                </Switch>     
            </div>
        </Router>
        )
    
    }
}

export default App





















