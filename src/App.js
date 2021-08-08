import {Route} from 'react-router-dom';
import Title from './pages/Title/Title';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'

function App() {
  return (
    <div>
        
        {/* note: title page route  */}
        <Route path="/title">
            <Title></Title>
        </Route>
        
        {/* note: login page */}
        <Route path="/login">
            <Login></Login>
        </Route>
        
        {/* note: home page  */}
        <Route path="/home">
            <Home></Home>
        </Route>


    </div>
  );
}

export default App;
