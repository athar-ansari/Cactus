import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Shop from "./components/Shop/Shop";
import MoreItems from "./components/Shop/MoreItems/MoreItems";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/more-items" element={<MoreItems/>} />
  
        </Routes>
      </Router>
    </>
  );
}

export default App;
