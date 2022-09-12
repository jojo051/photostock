import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import DeleteImages from "./components/DeleteImages";
import ViewImages from "./components/ViewImages"
import MultipleSending from "./components/MultipleSending";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/upload" element={<MultipleSending />}/>
        <Route path="/view" element={<ViewImages />}/>
        <Route path="/delete" element={<DeleteImages />}/>
        <Route path="*" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
