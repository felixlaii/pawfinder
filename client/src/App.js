import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageHeader from './components/PageHeader/PageHeader'
import HomePage from './pages/HomePage/HomePage'
import ResultsPage from './pages/ResultsPage/ResultsPage'
import DashBoard from './pages/Dashboard/Dashboard.jsx'
import UserPref from './components/UserPref/UserPref.jsx'
import SearchBar from './components/SearchBar/SearchBar'
import Gallery from './components/GalleryList/GalleryList.jsx'
import GalleryListItem from './components/GalleryListItem/GalleryListItem'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import DashboardDetails from './components/DashboardDetails/DashboardDetails.jsx'


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
                    <Route path="/search" component={SearchBar} />
                    <Route path="/search/:searchQuery" component={Gallery} />
                    <Route path="/gallery" component={GalleryListItem} />



                    <Route path="/users" component={UserPref} />
                    <Route path="/dashboard" component={DashBoard} />
                    <Route path="/dashboard/:details" component={DashboardDetails} />



             



                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
