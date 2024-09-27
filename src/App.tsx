import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoreNavbar from "./components/StoreNavbar";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <StoreNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
