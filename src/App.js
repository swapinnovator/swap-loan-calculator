import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
     <Router basename="/swap-loan-calculator">
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
       </Switch>
     </Router>
  );
}

export default App;
