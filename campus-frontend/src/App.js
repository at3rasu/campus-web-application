import { BrowserRouter } from "react-router-dom";
import { Alert } from "./components/alert/Alert";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Alert />
    </BrowserRouter>
  )
}

export default App;
