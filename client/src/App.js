import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/SignUp/SignUp';
import PageHeader from './components/PageHeader/PageHeader'
import HomePage from './pages/HomePage/HomePage'

function App() {
    return (
        <BrowserRouter>
        <PageHeader />
            <div className="App">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
