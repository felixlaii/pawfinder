import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import PageHeader from './components/PageHeader/PageHeader'
import HomePage from './pages/HomePage/HomePage'

function App() {
    return (
        <BrowserRouter>
        <PageHeader />
            <div className="App">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
