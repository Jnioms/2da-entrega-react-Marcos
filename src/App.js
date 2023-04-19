import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Views/ItemListContainer";
import ItemDetailContainer from "./Views/ItemDetailContainer";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={routes.root} element={<ItemListContainer />} />
        <Route
          path={routes.itemListContainer}
          element={<ItemListContainer />}
        />
        <Route
          path={routes.itemDetailContainer}
          element={<ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
