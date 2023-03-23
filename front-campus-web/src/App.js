import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { SingIn } from "./pages/SingIn";
import { RoleSelection } from "./pages/RoleSelection";
import { SingUp } from "./pages/SingUp";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SingIn />}/>
          <Route path="/RoleSelection" element={<RoleSelection />}/>
          <Route path="/SingUp" element={<SingUp />}/>
          <Route path="/MainPage" element={<MainPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
