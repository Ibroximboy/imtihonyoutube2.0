import './App.scss';
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from './Pages/Home/Home.jsx'
import Chanel from './Pages/Chanel/Chanel.jsx';
import Rolics from './Pages/Rolics/Rolics';

//Mini Pages
import MiniVideos from './Pages/Chanel/Minis/Videos.jsx'
import PlayList from './Pages/Chanel/Minis/PlayList'
import Channels from './Pages/Chanel/Minis/Channels'
import Disscution from './Pages/Chanel/Minis/Disscussion'
import MiniAbout from './Pages/Chanel/Minis/MiniAbout'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/video' component={Rolics} />
        <Route path="/chanel" component={Chanel} />
        <Route path='/minihome' component={Chanel} />
        <Route path='/minivideos' component={MiniVideos} />
        <Route path='/miniplaylist' component={PlayList} />
        <Route path='/minichannels' component={Channels} />
        <Route path='/minidiscussion' component={Disscution} />
        <Route path='/miniabout' component={MiniAbout} />
      </Switch>
    </>
  );
}

export default App;
