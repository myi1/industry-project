import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import SignIn from "./Pages/SignIn/SignIn";
import HomePage from "./Pages/HomePage/HomePage";
import DoctorsPage from "./Pages/DoctorsPage/DoctorsPage";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/home' component={HomePage} />
          <Route path='/doctor' component={DoctorsPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
