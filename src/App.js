import './App.css';
//importing react-bootstrap css in app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';

function App() {

  return (
    <div className="App">
      {/* rendering MovieList component within app.js to keep code clean */}
      <MovieList />
    </div>
  );
}

export default App;
