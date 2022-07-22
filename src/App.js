import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './login';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Login}/> 
        <Route path="/home" element={<Home/>} />
      </Router>
    </div>
  );
}

export default App;
