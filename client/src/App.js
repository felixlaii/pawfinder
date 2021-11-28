import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/SignUp/SignUp';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
