import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageHeader from './components/PageHeader/PageHeader'
import HomePage from './pages/HomePage/HomePage'
import ResultsPage from './pages/ResultsPage/ResultsPage'
import DashBoard from './pages/Dashboard/Dashboard.jsx'
import SearchBar from './components/SearchBar/SearchBar'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import DashboardDetails from './components/DashboardDetails/DashboardDetails.jsx'
import AdoptionPage from './pages/AdoptionPage/AdoptionPage'


function App() {
    return (
        <BrowserRouter>
        <PageHeader />
            <div className="App">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />

                    <Route path="/results" component={ResultsPage} />
                    <Route path="/adoption/:id" component={AdoptionPage} />
                    
                    <Route path="/gallery" component={SearchBar} />

                    <Route path="/dashboard" component={DashBoard} />
                    <Route path="/dashboard/:details" component={DashboardDetails} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
