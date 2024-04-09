import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Dashboard from './Dashboard'
import Userlist from './Userlist';
import Sidebar from './Sidebar';
import '../css/main.css';


const App = () => (
  <Router>
    <div className="container">
      <Sidebar />
      <Routes>
        {/* leer bien la documentacion de React-router-dom https://reactrouter.com/en/6.22.3/routers/picking-a-router*/}
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />}> </Route>
        <Route path="/Userlist" element={<Userlist />}> </Route>
      </Routes>
    </div>
  </Router>
);

export default App;