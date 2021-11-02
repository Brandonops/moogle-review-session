import './App.css';
//importing react-bootstrap css in app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Watchlist from './components/Wachlist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          {/* rendering MovieList component within app.js to keep code clean */}
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
