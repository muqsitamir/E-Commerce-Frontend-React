import './App.css';
import Main from "./pages/Main";
import AdStrip from "./headers/AdStrip";
import NavBar from "./headers/Navbar";
import Footer from "./footers/InfoLinks";
import {Route, Routes} from "react-router-dom";
import Sport from "./pages/Sport";


function App() {

    return (
      <>
        <AdStrip/>
        <NavBar/>
        <Routes>
            {/*<Route path='/' element={<Main/>}/>*/}
            <Route path='/(.*)' element={<Sport/>}/>
            {/*    {["/home", "/users", "/widgets", "/Volleyball"].map((path) =>*/}
            {/*        <Route path={path} element={<Sport/>}  />*/}
            {/*    )}*/}
        </Routes>
        <Footer/>
      </>
    );
}

export default App;
