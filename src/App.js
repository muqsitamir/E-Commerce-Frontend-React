import './App.css';
import Product from "./features/listing/Product";
import Listing from "./features/listing/Listing";
import Main from "./pages/Main";
import AdStrip from "./features/AdStrip";
import NavBar from "./features/Navbar";

function App() {
  return (
      // <Listing/>
      <>
        <AdStrip/>
        <NavBar/>
        <Main/>
      </>
  );
}

export default App;
