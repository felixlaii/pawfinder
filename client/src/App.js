import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageHeader from './components/PageHeader/PageHeader'
import HomePage from './pages/HomePage/HomePage'
import ResultsPage from './pages/ResultsPage/ResultsPage'
import DashBoard from './pages/Dashboard/Dashboard.jsx'
import UserPref from './components/UserPref/UserPref.jsx'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
    return (
        <BrowserRouter>
        <PageHeader />
            <div className="App">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/results" component={ResultsPage} />
                    <Route path="/search" component={SearchBar} />

                    <Route path="/users" component={UserPref} />
                    <Route path="/dashboard" component={DashBoard} />
             



                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
