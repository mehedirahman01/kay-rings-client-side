import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Collection from './Pages/Collection/Collection/Collection';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Dashboard from './Pages/Dashboard/Dashboard';
import Payment from './Pages/Dashboard/Payment/Payment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/collection">
              <Collection></Collection>
            </Route>
            <PrivateRoute path="/placeOrder/:_id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
