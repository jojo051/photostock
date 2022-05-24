import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import FormDoc from "./pages/FormDoc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<FormDoc />}/>
        <Route path="*" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
