import './App.css';

import NavBar from './Components/NavBar/NavBar';
import DashBar from './Components/Dashbar/DashBar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeaderThunder from './Components/HeaderComponents/HeaderThunder/HeaderThunder';
import DiscoverPage from './Pages/DiscoverPage'
import TreningPage from './Pages/TrendingPage'
import ArtistPage from './Pages/ArtistPage'


import HeaderCore from './Components/HeaderComponents/HeaderCore/HeaderCore';
import PlayListPage from './Pages/PlayListPage';
import RecentPage from './Pages/RecentPage'
import AboutPage from './Pages/AboutPage'
import Grid from './Pages/Grid'
import HorizontalNav from './Components/NavBar/HorizontalNav/HorizontalNav';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer'

let windowHeight = window.innerHeight;


function App() {
  return (
    <Router>
      <div className="App">
        <HeaderThunder />
        <div className="Master_wrapper" style={{ display: 'flex', width: '100%' }}>
          <div className="Nav_side">
            <NavBar />
          </div>
          <div className="Page_side" style={{ flexGrow: 1, overflowY: 'scroll', height: windowHeight, scrollBehavior: 'smooth' }}>
            <DashBar />
            <HeaderCore />
            <Switch>
              <Route exact path="/discover" component={DiscoverPage} />
              <Route exact path="/trending" component={TreningPage} />
              <Route exact path="/artists" component={ArtistPage} />
              <Route exact path="/playlist" component={PlayListPage} />
              <Route exact path="/recent" component={RecentPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/grid" component={Grid} />
            </Switch>
          </div>
        </div>
          <MusicPlayer />
      </div>
    </Router>
  );
}

export default App;

