import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/signin'; //importanto página signin
import SignUp from '../pages/SignUp'; //importando página signout

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/register" component={SignUp}/>

            <Route exact path="/dashboard" component={Dashboard
            }/>
        </Switch>
    )
}