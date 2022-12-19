import './App.css';
import Main from "./pages/Main";
import AdStrip from "./headers/AdStrip";
import NavBar from "./headers/Navbar";
import Footer from "./footers/InfoLinks";
import {Route, Switch} from "react-router-dom";
import Category from "./pages/Category";
import Viewall from "./pages/Viewall";


function App() {

    return (
      <>
        <AdStrip/>
        <NavBar/>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path="(.+)View-All" render={() => <Viewall/>}/>
            <Route path='\/(.+)\/' render={(props) => <Category/>}/>
        </Switch>
        <Footer/>
      </>
    );
}

export default App;
