
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import UserLists from "./pages/user-lists/user-lists";

function App() {
  return (
    <BrowserRouter>
      <header>This is API hehe</header>
      <UserLists/>

      {/* <Link to="/userlists"></Link>
      <Switch>
        <Route path="/userlists" component={UserLists} />
      </Switch> */}
      
      
    </BrowserRouter>
  );
}

export default App;
